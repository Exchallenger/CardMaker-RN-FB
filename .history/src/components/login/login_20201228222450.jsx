import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';

const Login = ({authService}) => {
    const onLogin = (event) =>{
        // authService.login(event.currentTarget.textContent)
        authService
    };
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