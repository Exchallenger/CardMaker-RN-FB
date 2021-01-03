import CardPre from 'components/card/card_pre';
import React, { useEffect, useState } from 'react';
import styles from "./preview.module.css";

const Preview = ({data,makePreview}) => {
    const [preview] = useState([]);

    useEffect(
        data.id && setPreview([...preview,<CardPre key={data.id}/>])
    );

    return(
        <section className={styles.section}>
            <h1 className={styles.title}>Card Preview</h1>
            <ul>
                {preview.map(pre => 
                <CardPre
                key ={data.id}
                pre={pre}
                />)}
            </ul>
        </section>
    );
}
            
 

export default Preview;