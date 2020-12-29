import React, { useState } from 'react';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import Login from './routes/login';
import Main from './routes/main';

const AppRouter = (props) => {
    const [login, setLogin] = useState(false);
    return(
    <Router>
        <Switch>
            <Route exact path="/">
                <Login login={login}/>
            </Route>
            <Route exact path="home">
                <Main/>
            </Route>
        </Switch>
    </Router>
    );
}
            


export default AppRouter;