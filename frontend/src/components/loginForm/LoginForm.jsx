import React from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';

const LoginForm = () =>{
    const handle = (e) =>{
        e.preventDefault()
        console.log("ok")
    }
    return(
        <div 
            style={{ display:"flex",
                justifyContent:"center",
                alignItems:"center",
                minHeight:"100vh"
            }}
        > 
            <Box
                component="form"
                sx={{
                   
                    width:"700px",
                }}
                noValidate
                autoComplete="off"
                onSubmit={handle}
            > 
                <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                    <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
                    <Input
                        id="standard-adornment-amount"
                        value={"21213"}
                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                    />
                </FormControl>
            </Box>
        </div>
    )
}

export default LoginForm