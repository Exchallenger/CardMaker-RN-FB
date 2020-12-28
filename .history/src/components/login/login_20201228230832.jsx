import React from 'react';
import { authService, firebaseInstance } from '../../service/firebase';
import Footer from '../footer/footer';
import Header from '../header/header';



const Login = () => {
    const onLogin = async(event) =>{
        let provider;
        // authService.login(event.currentTarget.textContent)
        if (event.currentTarget.name === "google"){
            provider = new firebaseInstance.auth.GoogleAuthProvider();
        }else if(event.currentTarget.name =="github"){
            provider = new firebaseInstance.auth.GithubAuthProvider();
        }
        await authService.signInWithPopup(provider).catch(
            (error) =>{
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                const credential = error.credential;
            }
        );
        
    }
    return(
        <section>
            <Header/>
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
                <div>&copy; Exchallenger 2020</div>
            </section>
            <Footer/>
        </section>
    )
}
            
    

export default Login;