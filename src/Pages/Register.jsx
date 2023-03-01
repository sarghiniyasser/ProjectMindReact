import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
<<<<<<< HEAD

function Register() {
=======
import firebase from 'firebase/compat/app';
import { auth, db } from "../firebase.js";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { checkIfEmail, checkIfNotEmpty } from "../common";

const Register = () => {

    const authForRegister = getAuth();
>>>>>>> origin/login
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [passwordValid, setPasswordValid] = useState(false);
<<<<<<< HEAD
  
    const handlePasswordChange = (event) => {
      const passwordValue = event.target.value;
      setPassword(passwordValue);
  
      // Validar la contraseña
      const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
      setPasswordValid(passwordValue === "" || passwordRegex.test(passwordValue));
    }
  
    return (
      <>
          <h1>Register</h1>
      <label>Nombre de usuario:</label>
      <input id="username" type="text" style={{background: 'gray'}} value={username} onChange={(e) => setUsername(e.target.value)} />
      <label>Correo:</label>
      <input id="email" type="email" style={{background: 'gray'}} value={email} onChange={(e) => setEmail(e.target.value)} />
      <label>Contraseña:</label>
      <input id="password" type="password" style={{background: 'gray'}} value={password} onChange={handlePasswordChange} />
      {!passwordValid && password !== "" && <div style={{color: 'red'}}>La contraseña es demasiado débil</div>}
      <label>Repetir contraseña:</label>
      <input id="password2" type="password" style={{background: 'gray'}} value={password2} onChange={(e) => setPassword2(e.target.value)} />
      <button style={{background: 'green', marginLeft: '20px'}}>Sumbit</button>
      <br />
      <div style={{marginTop: '30px', padding: '20px'}}>
        <button style={{background: 'gray'}}>Google</button>
        <button style={{background: 'blue'}}>Facebook</button>
        <button style={{background: 'black', color: 'white'}}>Github</button>
        <Link to = "/"><button style={{marginLeft: '50px', background: 'purple'}}>LoginPage</button></Link>
      </div>
      </>
    );
  }
  
  export default Register;
=======
    
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

    /**
     * Handler para verificar si el password es valido. 
     * 
     * @param {*} event 
     */
    const handlePasswordChange = (event) => {
        const passwordValue = event.target.value;
        setPassword(passwordValue);

        // Validar la contraseña
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
        setPasswordValid(passwordValue === "" || passwordRegex.test(passwordValue));
    }

    function verifyData() {
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password2 = document.getElementById('email').value;

        checkIfNotEmpty(username);
        checkIfNotEmpty(email);
        checkIfEmail(email);
    }

    return (
        <>
            <h1>Register</h1>
            <label>nombre usuario</label>
            <input id="username" type="text" style={{ background: 'gray' }}></input>
            <label>correo</label>
            <input id="email" type="email" style={{ background: 'gray' }} ></input>
            <label>contraseña</label>
            <input id="password" type="password" style={{ background: 'gray' }} onChange={handlePasswordChange}></input>
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
>>>>>>> origin/login
