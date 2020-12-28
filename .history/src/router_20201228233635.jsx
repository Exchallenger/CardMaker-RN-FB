import React, { useState } from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import Login from './components/login/login';
import Main from './components/main/main';


const AppRouter = (props) =>{
    const [init, setInit] = useState(false);
    return (
        <Router>
            <Switch>
            <Route exact path="/">
                {!init&&<Login/>}
            </Route>
            <Route exact path="/main">
                {init&&<Main/>}
            </Route>
            </Switch>
        </Router>
        );
      
}
            


export default AppRouter;