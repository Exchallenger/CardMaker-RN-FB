import React from 'react';
import imgfile from "../img/logo.png";
import styles from "./main.module.css";

const Main = (props) => {
    return(
        <div className={styles.all}>
            <nav className={styles.header}>
                <img className={styles.img} src={imgfile} alt="logo"/>
                <div className={styles.title}>Business Card Maker</div>
            </nav>
            <section className={styles.main}>
                Halo
            </section>
            <footer className={styles.footer}>
                &copy; Exchallenger 2020.12
            </footer>
        </div>
    )
};
            
   

export default Main;