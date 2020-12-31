import Card from 'components/card/card';
import React, { useState } from 'react';
import styles from "./editor.module.css";

const Editor = (props) => {
    let [cards, setCards] = useState([]);
    const onCardMaker = () => {
        cards.push(<Card/>);
        console.log(cards);
        setCards(cards);
    }
    
    return(  
        <div className={styles.div}>
            <h1 className={styles.title}>Card Maker</h1>
            <Card onCardMaker={onCardMaker}/>
            {cards}
        </div>

    );
}
            
    
export default Editor;