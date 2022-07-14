
from json import JSONDecodeError
import json
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render,redirect
from rest_framework import viewsets
from .models import User, Stock
import numpy as np
import influxdb_client
from influxdb_client.client.write_api import SYNCHRONOUS
from django.contrib.auth import login, authenticate,logout
# from .models import Todo
# Create your views here.
from django.views.decorators.csrf import csrf_exempt
import pandas as pd
from django.contrib.auth.decorators import login_required

globalAlerts = []

def index(request):
    if request.user.is_authenticated:
        return JsonResponse({"success": True, "redirection":False})
    else:
        return JsonResponse({"success": True, "redirection":"/register/"})
   

@csrf_exempt
def register(request):
    if request.method == "POST":
        name = request.POST.get("name")
        email = request.POST.get("email")
        password = request.POST.get("password")
        print(name,email,password, "titties")
        test = User.objects.filter(email=email).first()
        if test is None:
            user = User.objects.create_user(username=name,email=email,password=password)
            user.save()
            
            login(request,user)
            return HttpResponse(status=200)
            # return HttpResponse(status=200)
        else: 
            return HttpResponse(status=409)
    else:
        return HttpResponse(status=405)
    
    
def login_user(request):
    if request.method == "POST":
        email = request.POST.get("email")
        password = request.POST.get("password")
        user = authenticate(request, email=email, password=password)
        if user is not None:
            login(request,user)
            return HttpResponse(status=200)
        
    return HttpResponse(status=405)
        
            
      
        

def is_logged_in(request):
    if request.method == "GET":
        if request.user.is_anonymous:
            print("nah")
            return JsonResponse({"success": False})
        
        print('yes')
        return JsonResponse({"success": True, "user": request.user.email})
    return HttpResponse(status=405)


@login_required
def logout_user(request):
    logout(request)
    return HttpResponse(status=200)

@login_required
def follow_user(request):
    if request.method != "POST":
        data = json.loads(request.body)
        print(data)
        stocks = data["stocks"]
        #clear the existing users stock follows 
        for i in stocks.split(","):
            print(i)
            #create a new stock for per i
        
    else:
        return HttpResponse(status=405)
        
    # return JsonResponse({"success": True})
    
@csrf_exempt
def create_alerts(request):
    if request.method == "GET":
        return HttpResponse(json.dumps(globalAlerts), status=200)
    elif request.method == "POST":
        action = request.POST["action"]
        sym = request.POST["symbol"]
        print(f"alert received, {action} {sym}")
        globalAlerts.append((action, sym))
        return HttpResponse(status=200)
    else:
        return HttpResponse(status=405)
    
def getStocks():
    bucket = "stocks_sample"
    org = "9c5955fc99a60b8f"
    token = "Z1zTLcdabiA3tXhxQ3vHqt5_UVy0TJLrYVqdpomCr8FnYCGKJMKmQfeNOgcISV2qoNJkYGvuWm2c-gsWpj41tw=="
    url = "https://twodotoh-dev-andrew20220517115401.remocal.influxdev.co"
    epochTime = pd.Timestamp("2000-01-01 01:00:00", tz=None)

    client = influxdb_client.InfluxDBClient(url=url, token=token, org=org)
    queryApi = client.query_api()
    query = f'from(bucket: "{bucket}")\
    |> range(start: -10000h)\
    |> filter(fn: (r) => r["_measurement"] == "stock")'
    result = queryApi.query(org=org, query=query)
    results = []
    for table in result:
        for record in table.records:
            delta = pd.to_datetime(record.get_time()).tz_convert(None) - epochTime
            t = int(delta.total_seconds())
            results.append((record.values["name"], t, record.get_value()))

        df = pd.DataFrame(results)
        df.columns = ["sym", "timestamp", "price"]
        print(df)

        jsonData = []

        # Bucket by ticker name
        uniques = df.sym.unique()
        for u in uniques:
            dfSplit = df[df["sym"] == u]
            x = dfSplit["timestamp"]
            y = dfSplit["price"]
            latestPrice = y.iloc[-1]
            data = {
                "ticker": u,
                "fullName": "unknown",
                "change": "0%",
                "price": latestPrice,
                "values": {
                    "x": np.array(x).tolist(),
                    "y": np.array(y).tolist()
                }
            }
            jsonData.append(json.dumps(data))

    # jsonData is now an array of json-encoded strings
    print(jsonData)