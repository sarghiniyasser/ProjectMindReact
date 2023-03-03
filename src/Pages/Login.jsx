import React from "react";
import { Link, useNavigate } from "react-router-dom";
import firebase from 'firebase/compat/app';
import { auth } from "../firebase.js";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { db } from "../firebase";

const Login = () => {

    const authLogin = getAuth();
    const navigate = useNavigate();

    /**
     * Sign in con google.
     */
    const signInWithGoogle = () => {

        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider).then(async (result) => {
            if (result.user !== null) {
                const displayName = result.user.displayName;
                const uid = result.user.uid;
                const eMail = result.user.email;
                const data = {
                    name: displayName,
                    uid: uid,
                    e_mail: eMail,
                };

                const userRef = db.collection('users').doc(result.user.uid);
                const user = await userRef.get();
                if (!user.exists) {
                    console.log('No such document!');
                    const res = await db.collection('users').doc(uid).set(data);
                }

                navigate("MainPage");
            }
        }).catch((error) => {
            // エラー発生時は、その詳細が
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.email;
            const credential = error.credential;
            console.log(error);
            console.log(errorCode);
            console.log(errorMessage);
            console.log(email);
            console.log(credential);
        });
    }


    // /**
    //  * Sign in con google.
    //  */
    // function signInWithFacebook() {
    //     const provider = new firebase.auth.FacebookAuthProvider();
    //     auth.signInWithPopup(provider).then((result) => {
    //         if (result.user !== null) {
    //             const displayName = result.user.displayName;
    //             const uid = result.user.uid;
    //             console.log(displayName);
    //             console.log(uid);
    //             navigate("MainPage");
    //         }

    //     }).catch((error) => {
    //         // エラー発生時は、その詳細が
    //         const errorCode = error.code;
    //         const errorMessage = error.message;
    //         const email = error.email;
    //         const credential = error.credential;
    //         console.log(error);
    //         console.log(errorCode);
    //         console.log(errorMessage);
    //         console.log(email);
    //         console.log(credential);
    //     });
    // }

    // /**
    //  * Sign in con Github.
    //  */
    // function signInWithGithub() {
    //     const provider = new firebase.auth.GithubAuthProvider();
    //     auth.signInWithPopup(provider).then((result) => {
    //         console.log(result);
    //         if (result.user !== null) {
    //             const displayName = result.user.displayName;
    //             const uid = result.user.uid;
    //             console.log(displayName);
    //             console.log(uid);
    //             navigate("MainPage");
    //         }

    //     }).catch((error) => {
    //         // エラー発生時は、その詳細が
    //         const errorCode = error.code;
    //         const errorMessage = error.message;
    //         const email = error.email;
    //         const credential = error.credential;
    //         console.log(error);
    //         console.log(errorCode);
    //         console.log(errorMessage);
    //         console.log(email);
    //         console.log(credential);
    //     });
    // }

    /**
     * Sign in con la cuenta de la aplicaión.
     */
    function signIn() {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        signInWithEmailAndPassword(authLogin, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                navigate("MainPage");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode);
                console.log(errorMessage);
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
                    {/* <button style={{ background: 'blue' }} onClick={signInWithFacebook}>Facebook</button>
                    <button style={{ background: 'black', color: 'white' }} onClick={signInWithGithub}>Github</button> */}
                </div>
                <Link to="/register"><button style={{ marginLeft: '50px', background: 'purple' }}>Register</button></Link>
            </div>
        </>
    )
}

export default Login;