import React from "react";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';const Login = () =>{
    return(
        <>
        <h1>login</h1>
        <label>nombre usuario</label>
        <input id="username" type="text" style={{background: 'gray'}}></input>
        <label>correo</label>
        <input id="email" type="email" style={{background: 'gray'}}></input>
        <label>contraseña</label>
        <input id="password" type="password" style={{background: 'gray'}}></input>
        <label>Repetir contraseña</label>
        <input id="password2" type="password" style={{background: 'gray'}}></input>
        <button style={{background: 'green', marginLeft: '20px'}}>Sumbit</button>
        <br></br>
        <div style={{marginTop: '30px', padding: '20px'}}>
        <button style={{background: 'gray'}}>Google</button>
        <button style={{background: 'blue'}}>Fcebook</button>
        <button style={{background: 'black', color: 'white'}}>Hithub</button>

        
            <Link to = "/register"><button style={{marginLeft: '50px', background: 'purple'}}>Register</button></Link>
        </div>
        </>
    )
}


export default Login;