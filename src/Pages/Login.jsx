import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <>
            <div className="flex">
                <h1>Login page</h1>
                <label>correo</label>
                <input id="email" type="email" style={{ background: 'gray' }}></input>
                <label>contraseña</label>
                <input id="password" type="password" style={{ background: 'gray' }}></input>

                <br></br>
                <div style={{ marginTop: '30px', padding: '20px' }}>
                    <button style={{ background: 'gray' }}>Google</button>
                    <button style={{ background: 'blue' }}>Fcebook</button>
                    <button style={{ background: 'black', color: 'white' }}>Hithub</button>


                    
                </div>
                <Link to="/register"><button style={{ marginLeft: '50px', background: 'purple' }}>Register</button></Link>
            </div>

        </>
    )
}

export default Login;