import React from 'react';
import styles from "./card_pre.module.css";

const CardPre = (props) => {

    return(
        <form className={styles.form}>
            <div>
                <img src="" alt="logo"/>
            </div>
            <div>
                <h1>Ellie</h1>
                <p>company</p>
                <p>job</p>
                <p>email</p>
                <p>content</p>
            </div>
        </form>
    );
}
            
    

export default CardPre;