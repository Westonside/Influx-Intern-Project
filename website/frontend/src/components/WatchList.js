import { Box } from "@mui/system";
import React, { useState } from "react";
import { Stack,Typography } from "@mui/material";
import SingleStock from "./SingleStock";
import BuyList from "./BuyList";

const WatchList = () =>{

    const [followed, setFollowed] = useState([]);

    const examples = ["stock 1", "stock 2", "stock 3", "stock 4", "stock 5"]

    // ticker,
    // fullName,
    // values,
    // change,
    const standin = [
                        {ticker: "NVDA", fullName: "Nvidia", values:[],change: "-5%", price: 151.00, values:{x:[1,2,3], y:[1,2,3]}},
                        {ticker: "AMD", fullName: "Advanced Micro", values:[], change: "5%", price: 69.00},
                        {ticker: "RIVN", fullName: "Trash", values:[], change: "5%" ,price: 150.00, values:{x:[1,2,3], y:[1,2,3]}}
                    ]
    return(
        <Box sx={{paddingTop:3}}>
            <Typography variant="h4" component="div" gutterBottom sx={{marginBottom:2}} >
                WATCHLIST
            </Typography>
            <Stack spacing={3}>
                {standin.map((val,i) =>(
                    <SingleStock {...val} key={i}/>
                ))}
            </Stack>
        </Box>
    )
}

export default WatchList;