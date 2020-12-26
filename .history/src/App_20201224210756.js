import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={['/','login']} exact/>
        <Route path='/main'/>
      </Switch>
    </BrowserRouter>);
}

export default App;
