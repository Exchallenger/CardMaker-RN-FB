import React from 'react';
import styles from "./card_pre.module.css";
import imgfile from "../../img/default_logo.png";

const CardPre = ({data}) => {
    return(
        <form className={styles.form}>
            <div className={styles.imgdiv}>
                <img className={styles.img} src={imgfile} alt="logo"/>
            </div>
            <div className={styles.main}>
                <h1 className={styles.name}>{data.name}</h1>
                <p className={styles.company}>{data.company}</p>
                <p className={styles.job}>{data.job}</p>
                <p className={styles.email}>{data.email}</p>
                <p className={styles.content}>{data.content}</p>
            </div>
        </form>
    );
}
            
    

export default CardPre;