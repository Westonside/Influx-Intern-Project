import React, { useState } from "react";
import Header from "../components/Header";
import { Box } from "@mui/system";
import { Grid,Paper } from "@mui/material";
import styled from "@emotion/styled";
import { Theme } from "@mui/material";
import { TextField } from "@mui/material";
import { Container } from "@mui/system";
import { Typography } from "@mui/material";
import { Stack } from "@mui/material";
import { OutlinedInput } from "@mui/material";
import { Button } from "@mui/material";
const Login = () =>{
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        width: '80%',
        marginLeft: 20,
        borderRadius:4,
        paddingBottom:'50px',
        marginRight: 8,
    }));

    const handleSubmit = () =>{
            
    }


    return(
        <React.Fragment>
            <Header />
            <Container component="main" maxWidth="lg">
                <Box sx={{backgroundColor:"white", borderRadius:3}}>
                {/* <OutlinedInput name="email" placeholder="First Name" type="text" sx={{marginLeft:8, marginTop:5}}/> */}

                <Box sx={{justifyContent:'center', paddingBottom:4}}>
                    <Typography component={"h1"} variant="h3" sx={{marginLeft:15, paddingTop:5}}>
                        Login
                    </Typography>
                    <Box sx={{marginLeft:8}}>

                    
                        <Stack sx={{justifyContent:"center"}}>
                            
                            <OutlinedInput name="email" placeholder="Email" type="email" sx={{marginLeft:8, marginTop:5 ,width: "500px"}} value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                            <OutlinedInput name="password" placeholder="Password" type="password" sx={{marginLeft:8, marginTop:5, width: "500px"}} value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                            <Button variant="outlined" sx={{marginTop:3, width:'100px',textAlign:'center', marginLeft:8}} onClick={handleSubmit}>Submit</Button>

                        </Stack>
                    </Box>
                    </Box>
                    
                </Box>


            </Container>
            

        </React.Fragment>
        
    )
}

export default Login;