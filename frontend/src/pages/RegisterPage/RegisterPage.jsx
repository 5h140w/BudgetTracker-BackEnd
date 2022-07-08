import React from 'react'
import RegisterForm from '../../components/registerForm/RegisterForm'
import {Box , Typography} from "@mui/material"
import "./registerpage.css"

const RegisterPage = () =>{
    return(
        <div className='registerpage_body'>
            <Box 
                sx={{
                    width:"400px",
                    border:1,
                    borderRadius : "16px",
                    borderColor : 'grey.500'
                }}
            >
                <Typography variant='h3' color="black" align="center" sx={{mt: 4}}> Register</Typography> 
                <RegisterForm/>
            </Box>
        </div>
    )
}

export default RegisterPage