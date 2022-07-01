import React from 'react'
import "./loginPage.css"

const LoginPage = () =>{
    const clicked = (e) =>{
        e.preventDefault()
        console.log("clicked")
    }
    return(
        <>
            <div className='login_section'>
                <div className='login_container'>
                    <h1> Login </h1>
                    <form onSubmit={clicked}>
                        <div className='form-group'>
                            <label>Username</label>
                            <input type="text" placeholder='username' required={true}/>
                        </div>
                        <div className='form-group'>
                            <label>passoword</label>
                            <input type="password" placeholder='password' required={true}/>
                        </div>
                        <input type="submit" value="submit"/>
                    </form>
                </div> 
            </div>
        </>
    )
}

export default LoginPage