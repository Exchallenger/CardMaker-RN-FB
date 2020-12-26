import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
          <Route path = {['/login','/']} exact></Route>
          <Route path = '/main'></Route>
      </Switch>
    </BrowserRouter>);
}

export default App;
