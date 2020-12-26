import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/main/login/login';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={['/','login']} exact>
          <Login></Login>
        </Route>
        <Route path='/main'>
          
        </Route>
      </Switch>
    </BrowserRouter>);
}

export default App;
