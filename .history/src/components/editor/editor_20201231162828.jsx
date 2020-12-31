import Card from 'components/card/card';
import React, { useState } from 'react';
import styles from "./editor.module.css";

const Editor = (props) => {

    let [cards, setCards] = useState([]);
    const onCardMaker = () => {
        console.log(<Card/>);
    }
    
    return(  
        <div className={styles.div}>
            <h1 className={styles.title}>Card Maker</h1>
            <Card onCardMaker={onCardMaker}/>
            <button className={styles.plusBtn}><i className="fas fa-plus-circle"></i></button>
        </div>

    );
}
            
    
export default Editor;