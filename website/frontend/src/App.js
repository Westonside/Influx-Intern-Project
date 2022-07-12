import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import axios from "axios";
import Login from "./pages/Login";

class App extends React.Component{
  render(){
    axios.get("/api/")
    return(
      <Router>
        <Routes>
          <Route path = "/" element={<Home />}/>
          <Route path ="/login" element={<Login />} />
        </Routes>
      </Router>
    )
  }
}

export default App;