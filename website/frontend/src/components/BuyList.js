import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { Paper } from "@mui/material";

const BuyList = () =>{
    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
        minHeight: 100,
        lineHeight: '60px',
        
      }));
    return(
        <Item>
            <Box sx={{marginBottom:2}}>
                <Typography variant="h4" component="div" gutterBottom sx={{marginBottom:2}} >
                    BUY/SELL LIST
                </Typography>
            </Box>
        </Item>
        
    )

}

export default BuyList;