import React, { useState } from "react";
import Header from "../components/Header";
import HomeBody from "../components/HomeBody";
import { Grid } from "@mui/material";
import { Paper } from "@mui/material";
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { Box } from "@mui/system";
import { Stack } from "@mui/material";
const Home = () =>{
    const [search, setSearch] = useState("")
    console.log("in the homepage")
    console.log(search, 'is the input')


    
    return(
        <React.Fragment>
            <Header setSearched={setSearch} page={"index"}  />
            <HomeBody />
        </React.Fragment>
    )
}

export default Home;
