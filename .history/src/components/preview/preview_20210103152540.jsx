import CardPre from 'components/card/card_pre';
import React, { useEffect, useState } from 'react';
import styles from "./preview.module.css";

const Preview = ({data}) => {
    const [preview,setPreview] = useState([]);

    useEffect(()=>{
        const add = preview.push(<CardPre
            key={data.id}
           name={data.name}
           company={data.company}
           job={data.job}
           email={data.email}
           content={data.content}
             />);
        data.id && setPreview([add]);
    },[data])
        
    

    return(
        <section className={styles.section}>
            <h1 className={styles.title}>Card Preview</h1>
            <ul>
                {
                    setPreview([...preview,add])
                }
            </ul>
        </section>
    );
}
            
 

export default Preview;