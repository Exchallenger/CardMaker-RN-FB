import CardPre from 'components/card/card_pre';
import React, { useState } from 'react';
import styles from "./preview.module.css";

const Preview = ({data}) => {
    const [preview,setPreview] = useState([]);

    const makePreview = (data) =>{
        data.name && data.company && setPreview([...preview,<CardPre key={data.id}/>])
    }

    return(
        <section className={styles.section}>
            <h1 className={styles.title}>Card Preview</h1>
            <ul>
                <CardPre data={data}/>
            </ul>
        </section>
    );
}
            
 

export default Preview;