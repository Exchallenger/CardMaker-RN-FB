import CardPre from 'components/card/card_pre';
import React from 'react';
import styles from "./preview.module.css";

const Preview = ({onCardMake}) => {
    return(
        <section className={styles.section}>
            <h1 className={styles.title}>Card Preview</h1>
            <ul>
                <CardPre onCardMake={onCardMake}/>
            </ul>
        </section>
    );
}
            
 

export default Preview;