import React, { useEffect, useState } from 'react';
import { authService, firebaseInstance } from '../service/firebase';
import styles from "./login.module.css";
import imgfile from "../img/logo.png"
import { useHistory } from 'react-router-dom';


const Login = ({login}) => {
    const history = useHistory();

    const onLogin = async(event) =>{
        let provider;
        // authService.login(event.currentTarget.textContent)
        if (event.currentTarget.name === "google"){
            provider = new firebaseInstance.auth.GoogleAuthProvider();
        }else if(event.currentTarget.name =="github"){
            provider = new firebaseInstance.auth.GithubAuthProvider();
        }
        await authService.signInWithPopup(provider)
        .then(data => goMain(data.user.uid));     
    }
    const goMain= (data) => {
        data && history.push({
            pathname:"/main",
            state:{id : data}
        });
    }
     const onAuthChange = () =>{
         firebaseInstance.auth.onAuthStateChanged(user =>{
             user && goMain();
         })
     }
    useEffect(()=>{
        onAuthChange();
    })

    return(
        <section className={styles.section}>
            <div className={styles.nav}>
                <img className={styles.img} src={imgfile}/>
                <h1 className={styles.title}>Business Card Maker</h1>
                
            </div>
            <div className={styles.main}>
                {login ? <button className={styles.logout}>Log out</button> : <><h1 className={styles.h1}>Login By</h1>
                <ul className={styles.ul}>
                    <li>
                        <button className={styles.gobtn} onClick={onLogin} name="google">Google</button>
                    </li>
                    <li>
                        <button className={styles.gibtn} onClick={onLogin} name="github">Github</button>
                    </li>
                </ul></> }
            </div>
            <div className={styles.footer}>&copy; Exchallenger</div>
        </section>
    )
}
            
    

export default Login;