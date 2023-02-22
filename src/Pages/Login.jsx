import React from "react";
import { Link } from "react-router-dom";
import firebase from 'firebase/compat/app';
import { auth } from "../firebase.js";

const Login = () => {

    /**
     * Sign in con google.
     */
    function  signInWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }

    /**
     * Sign in con google.
     */
    function  signInWithFacebook() {
        const provider = new firebase.auth.FacebookAuthProvider();
        auth.signInWithPopup(provider);
    }

    /**
     * Sign in con Github.
     */
    function  signInWithGithub() {
        const provider = new firebase.auth.GithubAuthProvider();
        auth.signInWithPopup(provider);
    }

    /**
     * Sign in con la cuenta de la aplicaión.
     */
    function signIn() {
        
    }


    return (
        <>
            <div className="flex">
                <h1>Login page</h1>
                <label>correo</label>
                <input id="email" type="email" style={{ background: 'gray' }}></input>
                <label>contraseña</label>
                <input id="password" type="password" style={{ background: 'gray' }}></input>
                <button style={{background: 'green', marginLeft: '20px'}}>Submit</button>

                <br></br>
                <div style={{ marginTop: '30px', padding: '20px' }}>
                    <button style={{ background: 'gray' }} onClick={signInWithGoogle}>Google</button>
                    <button style={{ background: 'blue' }} onClick={signInWithFacebook}>Facebook</button>
                    <button style={{ background: 'black', color: 'white' }} onClick={signInWithGithub}>Github</button>
                </div>
                <Link to="/register"><button style={{ marginLeft: '50px', background: 'purple' }}>Register</button></Link>
            </div>
        </>
    )
}

export default Login;