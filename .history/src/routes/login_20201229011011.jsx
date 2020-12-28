import React from 'react';
import { authService, firebaseInstance } from '../service/firebase';
import styles from "./login.module.css";
import imgfile from "../img/logo.png"


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
        <div className={styles.nav}>
            <img className={styles.img} src={imgfile}/>
            <h1 className={styles.title}>Business Card Maker</h1>
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
            <div className="footer">&copy; Exchallenger</div>
        </section>
        </>
    )
}
            
    

export default Login;