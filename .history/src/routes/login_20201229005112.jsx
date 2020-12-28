import React from 'react';
import { authService, firebaseInstance } from '../service/firebase';
import styles from "./login.module.css";


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
        <>
        <div>
            <img src="./logo"/>
            <h1>Business Card Maker</h1>
        </div>
        <section className={styles.section}>
                <h1 className={styles.h1}>Login</h1>
                <ul className={styles.ul}>
                    <li>
                        <button className={styles.gobtn} onClick={onLogin} name="google">Google</button>
                    </li>
                    <li>
                        <button className={styles.gibtn} onClick={onLogin} name="github">Github</button>
                    </li>
                </ul>
        </section>
        </>
    )
}
            
    

export default Login;