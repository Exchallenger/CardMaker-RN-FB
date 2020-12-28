import React from 'react';
import { authService, firebaseInstance } from '../service/firebase';
import styles from "../login.module.css";


const Login = () => {


    const onLogin = async(event) =>{
        let provider;
        // authService.login(event.currentTarget.textContent)
        if (event.currentTarget.name === "google"){
            provider = new firebaseInstance.auth.GoogleAuthProvider();
        }else if(event.currentTarget.name =="github"){
            provider = new firebaseInstance.auth.GithubAuthProvider();
        }
        await authService.signInWithPopup(provider)
        .then
        
    }
    return(
        <section className={styles.section}>
            <section>
                <h1>Login</h1>
                <ul>
                    <li>
                        <button onClick={onLogin} name="google">Google</button>
                    </li>
                    <li>
                        <button onClick={onLogin} name="github">Github</button>
                    </li>
                </ul>
            </section>
        </section>
    )
}
            
    

export default Login;