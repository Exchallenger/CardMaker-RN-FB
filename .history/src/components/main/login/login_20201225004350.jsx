import React from 'react';

const Login = (props) => (
    
    <form action="POST" className="login">
        <input type="text" placeholder="Put in ID"/>
        <input type="password" placeholder="Put in password"/>
        <button className="login">Login</button>
        <button className="sign">Sign in</button>

    </form>);

export default Login;