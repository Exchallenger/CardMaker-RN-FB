import React from 'react';
import styles from "./card_pre.module.css";
import imgfile from "../../img/default_logo.png";

const CardPre = ({onCardMake}) => {
    const getData = (event) =>{
        event.preventDefault();
        onCardMake(data);
        console.log(data);
    }
    return(
        <form className={styles.form}>
            <div className={styles.imgdiv}>
                <img className={styles.img} src={imgfile} alt="logo"/>
            </div>
            <div className={styles.main}>
                <h1 className={styles.name}>Ellie</h1>
                <p className={styles.company}>company</p>
                <p className={styles.job}>job</p>
                <p className={styles.email}>email</p>
                <p className={styles.content}>content</p>
            </div>
            <button onClick={getData}>hi</button>
        </form>
    );
}
            
    

export default CardPre;