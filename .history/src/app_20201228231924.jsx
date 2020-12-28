import './app.css';
import React, { useState } from 'react';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Login from './components/login/login';
import Footer from './components/footer/footer';

function App() {
  const [init, setInit] = useState(false);
  return (
    <>
    {init && <Header/>}
    {!init && <Login />}
    {init && <Footer/>}
    </>
    );
}

export default App;