import Card from 'components/card/card';
import React, { useState } from 'react';
import styles from "./editor.module.css";

const Editor = (props) => {
    let [cards, setCards] = useState([]);
    const onCardMaker = () => {
        console.log(cards);
    }
    
    return(  
        <div className={styles.div}>
            <h1 className={styles.title}>Card Maker</h1>
            <Card onCardMaker={onCardMaker}/>
            {onCardMaker() && cards.push(<Card/>) && setCards(cards)}
        </div>

    );
}
            
    
export default Editor;