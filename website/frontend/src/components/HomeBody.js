import { Grid } from "@mui/material";
import React from "react";
import { Paper } from "@mui/material";
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { Box } from "@mui/system";
import { Stack } from "@mui/material";
import WatchList from "./WatchList";
import BuyList from "./BuyList";
import TopStocks from "./TopStocks";
const HomeBody = () =>{
    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
        minHeight: 100,
        lineHeight: '60px',
        
      }));

    const startValues = [1,2,3]
   return(
    <Box sx={{ flexGrow: 2, marginTop:5, paddingLeft:5,paddingRight:5 }}>
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <TopStocks />
            </Grid>
            <Grid item container spacing={4} sx={{marginTop:5}}>
                <Grid item xs={7}>
                    <Item>
                        <WatchList />
                    </Item>
                </Grid>
                <Grid item xs={4}>
                    <BuyList />
                </Grid>
            </Grid>
            
        </Grid>
        
    {/* <Grid container spacing={2}>
      <Grid item xs={11} md={11} height={100} >

          <Item elevation={4}>
              <h2> testing</h2>
            </Item>
      </Grid>
        <Grid item spacing={5} container >
            <Grid item xs ={12}></Grid>
            <Grid item xs ={12}></Grid>
        </Grid>
        
      
    
        <Grid item xs={7} md={4}>
            <Item>xs=7 md=4</Item>
        </Grid>
        <Grid item xs={7} md={4}>
            <Item>xs=6 md=4</Item>
        </Grid>
    
      
      <Grid item xs={6} md={8}>
        <Item>xs=6 md=8</Item>
      </Grid>
    </Grid> */}
  </Box>
   )
}

export default HomeBody;