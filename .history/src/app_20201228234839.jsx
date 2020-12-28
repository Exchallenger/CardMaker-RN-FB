import React, { useState } from 'react';
import AppRouter from "./router";

function App() {
  return(
    <>
    <AppRouter></AppRouter>
    </>
  );
  
}

export default App;

// <>
// {init && <Header/>}
// {!init && <Login />}
// {init && <Footer/>}
// </>