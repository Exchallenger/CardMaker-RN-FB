import React, { useState } from 'react';
import AppRouter from './router';
import styles from "./app.module.css";


function App() {
  return(
    <div className={styles.app}>
      <AppRouter/>
    </div>
  );
  
}

export default App;
