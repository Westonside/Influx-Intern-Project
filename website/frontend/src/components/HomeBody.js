import { Grid } from "@mui/material";
import React from "react";
import { Paper } from "@mui/material";
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { Box } from "@mui/system";
import { Stack } from "@mui/material";
const HomeBody = () =>{
    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
        minHeight: 100,
        lineHeight: '60px',
        
      }));

//       <Stack direction="row" spacing={2}>
//       <Item>Item 1</Item>
//       <Item>Item 2</Item>
//       <Item>Item 3</Item>
//   </Stack>
    const startValues = [1,2,3]
   return(
    <Box sx={{ flexGrow: 2, marginTop:5, paddingLeft:5,paddingRight:5 }}>
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Item elevation={3}>testing</Item>
            </Grid>
            <Grid item container spacing={4} sx={{marginTop:5}}>
                <Grid item xs={7}>
                    <Item>My Watchlist</Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>My Buys</Item>
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