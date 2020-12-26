import React from 'react';

const Login = (props) => (
    
    <form action="POST" className="login">
                <button className="login">Login</button>
        <button className="sign">Sign in</button>
        <input type="text" placeholder="Put in ID"value="id"/>
        <input type="password" placeholder="Put in password" value="pw"/>

    </form>);

export default Login;