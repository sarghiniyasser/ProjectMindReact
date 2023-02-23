import React from "react";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import { auth, db } from "../firebase.js";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Register = () => {

    const authForRegister = getAuth();
    
    /**
     * Registrar a la aplicación
     */
    function registerInApplication() {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        createUserWithEmailAndPassword(authForRegister, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    }

    return (
        <>
            <h1>Register</h1>
            <label>nombre usuario</label>
            <input id="username" type="text" style={{ background: 'gray' }}></input>
            <label>correo</label>
            <input id="email" type="email" style={{ background: 'gray' }}></input>
            <label>contraseña</label>
            <input id="password" type="password" style={{ background: 'gray' }}></input>
            {!passwordValid && password !== "" && <div style={{color: 'red'}}>La contraseña es demasiado débil</div>}

            <label>Repetir contraseña</label>
            <input id="password2" type="password" style={{ background: 'gray' }}></input>
            <button style={{ background: 'green', marginLeft: '20px' }} onClick={registerInApplication}>Submit</button>
            <br></br>
            <div style={{ marginTop: '30px', padding: '20px' }}>
                <button style={{ background: 'gray' }}>Google</button>
                <button style={{ background: 'blue' }}>Facebook</button>
                <button style={{ background: 'black', color: 'white' }}>Github</button>


                <Link to="/"><button style={{ marginLeft: '50px', background: 'purple' }}>LoginPage</button></Link>
            </div>
        </>
    )
}


export default Register;