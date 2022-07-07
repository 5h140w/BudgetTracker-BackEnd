import React from 'react'
import {Box} from "@mui/material"
import "./loginpage.css"
import LoginForm from '../../components/loginForm/LoginForm'

const LoginPage = () =>{
    return(
        <div className='loginpage_body'>
            <Box 
                sx={{
                    width:"700px",
                    border:1,
                    borderRadius : "16px",
                    borderColor : 'grey.500'
                }}
            >
                <LoginForm/>
            </Box>
        </div>
    )
}

export default LoginPage