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
        const data = await authService.signInWithPopup(provider);
        console.log(data);
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
                        <button onClick={onLogin} name="githib">Github</button>
                        </li>
                </ul>
                <div>&copy; 2020</div>
            </section>
            <Footer/>
        </section>
    )
}
            
    

export default Login;