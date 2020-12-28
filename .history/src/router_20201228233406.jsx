import React, { useState } from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import Login from './components/login/login';


const AppRouter = (props) =>{
    const [init, setInit] = useState(false);
    return (
        <Router>
            <Switch>
            <Route exact path="/">
                {!init&&<Login/>}
            </Route>
            <Route></Route>
            </Switch>
        </Router>
        );
      
}
            


export default AppRouter;