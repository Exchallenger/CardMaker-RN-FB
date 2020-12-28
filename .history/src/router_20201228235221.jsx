import React, { useState } from 'react';
import { HashRouter as Route, Router, Switch } from 'react-router-dom';
import Login from './routes/login/login';
import Main from './routes/main/main';


const AppRouter = (props) =>{
    const [init, setInit] = useState(false);
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    {!init && <Login/>}
                </Route>
                <Route exact path="/main">
                    {init && <Main/>}
                </Route>
            </Switch>
        </Router>
        );
      
}
            


export default AppRouter;