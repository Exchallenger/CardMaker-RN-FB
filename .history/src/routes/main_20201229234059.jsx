import React from 'react';
import imgfile from "../img/logo.png";
import styles from "./main.module.css";

const Main = (props) => {
    return(
        <>
            <header>
                <img src={imgfile} alt="logo"/>
                <div>Business Card Maker</div>
            </header>
            <section>
                Halo
            </section>
            <footer>
                &copy; Exchallenger 2020.12
            </footer>
        </>
    )
};
            
   

export default Main;