import CardPre from 'components/card/card_pre';
import React, { useEffect, useState } from 'react';
import styles from "./preview.module.css";

const Preview = ({data}) => {
    const [preview,setPreview] = useState([]);

    useEffect(()=>{
        data.id && setPreview([...preview,<CardPre
            key={data.id}
           name={data.name}
           company={data.company}
           job={data.job}
           email={data.email}
           content={data.content}
             />]);
    },[data])
        
    

    return(
        <section className={styles.section}>
            <h1 className={styles.title}>Card Preview</h1>
            <ul>
                {preview.map(pre => 
                <CardPre
                key ={pre.key}
                pre={pre}
                data={data}
                />)}
            </ul>
        </section>
    );
}
            
 

export default Preview;