import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./SignIn.css";

const SignIn = () => {
    const[mailid ,setmailid] = useState("");
    const[password ,setPassword] = useState("");

    const loginUser = async (e)=>{
        e.preventDefault();
        const response = await fetch("https://tle-pooja.herokuapp.com/login",{
            // http://localhost:8080/login
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json",
            },
            body:JSON.stringify({mailid,password})

        })
        const data = await response.json();
        console.log(data.token);

        if (data.token) {
			localStorage.setItem('token', data.token)
			alert(`Login ${data.Status}`)
			window.location.href = '/chart'
		} else {
			alert(data.message)
		}
    }
  return (
    <div className='login-main-container'>
        <h1>Login</h1>
        <div className='login-container'>
            <form method="post">
                <input onChange={(e)=>setmailid(e.target.value)} type="email" name="mailid" id="mailid" placeholder='User ID'/>
                <input  onChange={(e)=>setPassword(e.target.value)} type="password" name="password" id="password" placeholder='Password'/>
                <button onClick={loginUser}>Sign In</button>
            </form>
            <Link className='signup-link' to="/signup">Sign Up</Link>
        </div>
    </div>
  )
}

export default SignIn