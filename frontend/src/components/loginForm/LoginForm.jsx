import React from 'react'
import {Box, FormControl , TextField } from '@mui/material';

const LoginForm = () =>{
    const handle = (e) =>{
        e.preventDefault()
        console.log("ok")
    }
    return(
        <Box
            sx={{
                p : 1
            }}
        > 
            <Box
                component="form"     
                noValidate
                autoComplete="off"
                onSubmit={handle}
            > 
                <FormControl 
                    fullWidth={true} 
                >
                    <TextField 
                        required
                            id="standard-required"
                            label="Required"
                            variant="standard"
                        />
                </FormControl>
            </Box>
        </Box>
    )
}

export default LoginForm