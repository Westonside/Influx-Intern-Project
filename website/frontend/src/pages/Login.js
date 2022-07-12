import React from "react";
import Header from "../components/Header";
import { Box } from "@mui/system";
import { Grid,Paper } from "@mui/material";
import styled from "@emotion/styled";
import { Theme } from "@mui/material";
import { TextField } from "@mui/material";

const Login = () =>{

    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
        minHeight: 100,
        lineHeight: '60px',
        
    }));
    return(
        <React.Fragment>
            <Header />
            <Box sx={{ flexGrow: 2, marginTop:5, paddingLeft:5,paddingRight:5 }}>
                <Grid container direction="column">
                    <Grid item container sx={{justifyContent:"center"}} >
                        <Grid item xs={2}>
                            <TextField id="filled-basic" label="Filled" variant="filled" />
                        </Grid>
                        <Grid item xs={2}>
                            <TextField id="filled-basic" label="Filled" variant="filled" />
                        </Grid>
                    </Grid>
                    <Grid item><p>Testing</p></Grid>

                </Grid>
            </Box>
        </React.Fragment>
        
    )
}

export default Login;