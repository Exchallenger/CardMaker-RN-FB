import React, { useState } from 'react';
import AppRouter from './router';
import React from "react";


function App() {
  return(
    <>
    <AppRouter/>
    </>
  );
  
}

export default App;

// <>
// {init && <Header/>}
// {!init && <Login />}
// {init && <Footer/>}
// </>