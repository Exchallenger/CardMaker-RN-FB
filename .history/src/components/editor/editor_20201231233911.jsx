import Card from 'components/card/card';
import React, { useState } from 'react';
import styles from "./editor.module.css";

const Editor = (props) => {
    const [cards, setCards] = useState([]);
    const onCardMaker = () => {
        //받아온 정보를 preview에 추가한다
    }

    const onAdd = () => {
        let key = Date.now();
        setCards([...cards,<Card key={key}/>]);
        }
    const Deleteitem = () =>{
    }
    return( 
        <div className={styles.div}>
            <h1 className={styles.title}>Card Maker</h1>
            <ul>
                {cards.map(card =>
                <Card
                key={key}
                Deleteitem={Deleteitem}
                onCardMaker={onCardMaker}
                cards={cards}
                />)}
            </ul>
            <button onClick={onAdd} className={styles.plusBtn}><i className="fas fa-plus-circle"></i></button>
        </div>

    );
}
            
    /* <Card 
            onCardMaker={onCardMaker} 
            Deleteitem={Deleteitem} 
            key={0}
            cards={cards}
            />
            {cards}*/
    
export default Editor;