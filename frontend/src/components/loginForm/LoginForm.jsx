import React from 'react'
import {Box, FormControl , TextField, Button, Typography} from '@mui/material';
import axios from "axios"
import { useState } from 'react';

const LoginForm = () =>{
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [error , seterror] = useState("")

    const handle = (e) =>{
        e.preventDefault()
        axios.post(
            'http://localhost:8080/auth/login' ,{
                email, password
            }
        ).then(
            (data)=>console.log(data)
        ).catch(
            (err)=>seterror(err.response.data.msg)
        )
    }
    return(
        <Box
            sx={{
                p : 3
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
                        label="Email"
                        type="email"
                        margin="normal"
                        variant="standard"
                        sx={{m : 2}}
                        onChange={(e)=>setemail(e.target.value)}
                    />
                    <TextField 
                        required
                        id="standard-required"
                        label="Password"
                        type="password"
                        variant="standard"
                        margin="normal" 
                        sx={{m : 2}}
                        onChange={(e)=>setpassword(e.target.value)}
                    />
                    <Button
                        type='submit'
                        variant="contained"
                        sx={{m : 2}}
                    >
                        Submit
                    </Button>
                    <Typography variant="p" align='center' mt={2} sx={{color:"red", fontSize:15 }}>
                        {error}
                    </Typography>
                </FormControl>
            </Box>
        </Box>
    )
}

export default LoginForm