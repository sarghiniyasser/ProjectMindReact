import React from "react";
import { Link } from "react-router-dom";
import firebase from 'firebase/compat/app';
import { auth } from "../firebase.js";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {

    const authLogin = getAuth();

    /**
     * Sign in con google.
     */
    function signInWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
        console.log(auth.currentUser);
    }

    /**
     * Sign in con google.
     */
    function signInWithFacebook() {
        const provider = new firebase.auth.FacebookAuthProvider();
        auth.signInWithPopup(provider);
    }

    /**
     * Sign in con Github.
     */
    function signInWithGithub() {
        const provider = new firebase.auth.GithubAuthProvider();
        auth.signInWithPopup(provider);
    }

    /**
     * Sign in con la cuenta de la aplicaión.
     */
    function signIn() {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        signInWithEmailAndPassword(authLogin, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }

    return (
        <>
            <div className="flex">
                <h1>Login page</h1>
                <label>correo</label>
                <input id="email" type="email" style={{ background: 'gray' }}></input>
                <label>contraseña</label>
                <input id="password" type="password" style={{ background: 'gray' }}></input>
                <button style={{ background: 'green', marginLeft: '20px' }} onClick={signIn}>Submit</button>

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