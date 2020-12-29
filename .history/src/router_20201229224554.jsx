import React, { useState } from 'react';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import Login from './routes/login';
import Main from './routes/main';

const AppRouter = (props) => {
    return(
    <Router>
        <Switch>
            <Route exact path="/">
                <Login/>
            </Route>
            <Route exact path="/main">
                <Main/>
            </Route>
        </Switch>
    </Router>
    );
}
            


export default AppRouter;