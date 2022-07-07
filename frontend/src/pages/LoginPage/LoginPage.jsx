import React from 'react'
import {Box, Typography} from "@mui/material"
import "./loginpage.css"
import LoginForm from '../../components/loginForm/LoginForm'

const LoginPage = () =>{
    return(
        <div className='loginpage_body'>
            <Box 
                sx={{
                    width:"400px",
                    border:1,
                    borderRadius : "16px",
                    borderColor : 'grey.500'
                }}
            >
                <Typography variant='h3' color="black" align="center" sx={{mt: 4}}> Login</Typography> 
                <LoginForm/>
            </Box>
        </div>
    )
}

export default LoginPage