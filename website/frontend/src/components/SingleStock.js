import { Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { Grid } from "@mui/material";
import { Box, padding } from "@mui/system";
// import styled from "@emotion/styled/types/base";
import { Paper } from "@mui/material";
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import WatchList from "./WatchList";
import Plot from 'react-plotly.js';
// import styles from '../componentStyles/StockStyling';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width: '80%',
    marginLeft: 20,
    borderRadius:4,
}));

const MainItem = styled(Paper)(({ theme }) => ({
    backgroundColor: "Black",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width: '80%',
    marginLeft: 15,
    
}));




const SingleStock = ({
    ticker,
    fullName,
    values,
    change,
    price,
}) =>{
    const a = parseInt(change.replace("%", ""));
    //Green else Red
    const color = a >= 0 ? "#52f03a" : "#f72f50";
    const [hoverElevation, sethoverElevation] = useState(3)


    const hoverFunc = (e) =>{
        
    }
    
    
    
    return(
        <Box sx={{paddingBottom:3}}>
            <Item sx={{justifyContent:"center"}} elevation={hoverElevation} onMouseOut={()=>{sethoverElevation(3)}} onMouseOver={() =>{sethoverElevation(10)}}>
                <Grid container spacing={5}>
                    <Grid item sx={{marginLeft:5}}>
                        <Stack sx={{marginTop:5, width:'100px'}}>
                        <Typography variant="h6" display="block" gutterBottom>
                                        {ticker}
                                    </Typography>
                                
                                
                                <Typography variant="p" display="block">
                                    {fullName}
                                    </Typography>  
                        </Stack>
                    </Grid>
                    <Grid item sx={3}>
                        <Plot 
                            data={[
                                {
                                    x:values.x,
                                    y: values.y,
                                    type: 'scatter',
                                    mode: 'lines+markers',
                                    marker: {color: color},
                                },
                                
                            ]} layout={{width: 300, height: 300}}></Plot>
                    </Grid>
                    
                    <Grid item sx={2} sx={{marginTop:5}}>
                        <Box sx={{backgroundColor:color, width: '75px', borderRadius:2  }}>
                            <Typography variant="h8" display="block" gutterBottom>
                                        {price}
                            </Typography>
                            <Typography variant="h8" display="block" gutterBottom>
                                        {change}
                            </Typography>
                        </Box>

                       
                             
                    </Grid>
                    
                    
                </Grid>
            </Item>
        </Box>
    )
}

export default SingleStock;