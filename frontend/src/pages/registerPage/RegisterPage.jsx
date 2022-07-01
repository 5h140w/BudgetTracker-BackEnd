import React from 'react'
import { useState } from 'react'
import "./registerPage.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const RegisterPage = () =>{
    const [email, setemail] = useState("")
    const [username, setusername]= useState("")
    const [password, setpassword] = useState("")
    const [error, seterror] = useState("")

    let navigate = useNavigate()

    const clicked = (e) =>{
        e.preventDefault()
        axios.post(
            "http://localhost:8080/auth/register",{
                email:email,
                username:username,
                password:password
            }
        ).then(
            (res)=>{
                console.log(res.data.msg)
                sessionStorage.setItem("token", res.data.token)
                navigate("/")
            }
        ).catch(
            (err)=>{
                seterror(err.response.data.msg)
            }
        )

    }

    return (
        <>
            <div className='register_section'>
                <div className='register_container'>
                    <h1> Register </h1>
                    <p>{error}</p>
                    <form onSubmit={clicked}>
                        <div className='form-group'>
                            <label>Email</label>
                            <input type="email" placeholder='email' required={true} onChange={(e)=> setemail(e.target.value)}/>
                        </div>
                        <div className='form-group'>
                            <label>username</label>
                            <input type="text" placeholder='username' required={true} onChange={(e)=> setusername(e.target.value)}/>
                        </div>
                        <div className='form-group'>
                            <label>passoword</label>
                            <input type="password" placeholder='password' required={true} onChange={(e)=> setpassword(e.target.value)}/>
                        </div>
                        <input type="submit" value="submit"/>
                    </form>
                </div> 
            </div>
        </>
    )
}

export default RegisterPage