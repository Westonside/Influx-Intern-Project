import React from "react";
import { Box } from "@mui/system";
import { Stack } from "@mui/material";
import { Paper } from "@mui/material";
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

const TopStocks = () =>{
    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
        minHeight: 100,
        lineHeight: '60px',
        
      }));
    return(

    
        <Item>
            <Stack direction={"row"} >
                <p>
                    one
                </p>
                <p>
                    twi
                </p>
            </Stack>
        </Item>
        
    )

}

export default TopStocks;