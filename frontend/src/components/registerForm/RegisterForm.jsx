import React, {useState} from 'react'
import {Box, FormControl , TextField, Button, Typography} from '@mui/material';
import axios from "axios"
import { useNavigate } from 'react-router-dom';

const RegisterForm = () =>{

    const [username, setusername] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [error, seterror] = useState("")
    let navigate = useNavigate()

    const register = (e) =>{
        e.preventDefault()
        axios.post(
            'http://localhost:8080/auth/register' ,{
                username,email, password
            }
        ).then(
            (res)=>{
                localStorage.setItem("token",res.data.token)
                navigate("/home")
            }
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
                onSubmit={register}
            > 
                <FormControl 
                    fullWidth={true} 
                >
                    <TextField
                        required
                        id="standard-required"
                        label="Username"
                        margin="normal"
                        variant="standard"
                        sx={{m : 2}}
                        onChange={(e)=>setusername(e.target.value)}
                    />

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

export default RegisterForm