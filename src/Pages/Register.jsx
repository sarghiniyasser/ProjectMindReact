import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [passwordValid, setPasswordValid] = useState(false);
  
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