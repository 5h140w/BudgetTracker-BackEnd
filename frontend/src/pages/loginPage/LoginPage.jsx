import React from 'react'
import "./loginPage.css"
import axios from "axios"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const LoginPage = () =>{
    const [email,setemail] = useState("")
    const [password , setpassword] = useState("")
    const [error,setError] = useState("")
    const navigate = useNavigate()

    const clicked = (e) =>{
        e.preventDefault()
        console.log("clicked")
        axios.post(
            "http://localhost:8080/auth/login",{
                email: email,
                password: password
            }       
        ).then(
            (res)=>{
                console.log(res)
                sessionStorage.setItem("token", res.data.token)
                navigate("/")
            }
        ).catch(
            (err)=>{
                setError(err.response.data.msg)
            }
        )
    }
    return(
        <>
            <div className='login_section'>
                <div className='login_container'>
                    <h1> Login </h1>
                    <p>{error}</p>
                    <form onSubmit={clicked}>
                        <div className='form-group'>
                            <label>Email</label>
                            <input type="email" placeholder='email' required={true} onChange={(e)=> setemail(e.target.value)}/>
                        </div>
                        <div className='form-group'>
                            <label>password</label>
                            <input type="password" placeholder='password' required={true} onChange={(e)=> setpassword(e.target.value)}/>
                        </div>
                        <input type="submit" value="submit"/>
                    </form>
                </div> 
            </div>
        </>
    )
}

export default LoginPage