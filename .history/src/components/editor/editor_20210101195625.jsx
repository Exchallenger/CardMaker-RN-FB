import Card from 'components/card/card';
import React, { useState } from 'react';
import styles from "./editor.module.css";

const Editor = ({onCardMake}) => {
    const [cards, setCards] = useState([]);
    const onCardMaker = (data) => {
        onCardMake(data);
    }

    const onAdd = () => {
        let key = Date.now();
        setCards([...cards,<Card key={key} name="wow"/>]);        
        }

    const Deleteitem = (cart) =>{
        const delCard = cards.filter(card => card.key !== cart.key);
        setCards(delCard);
    }
    return( 
        <div className={styles.div}>
            <h1 className={styles.title}>Card Maker</h1>
            <ul>
                {cards.map(card =>
                <Card
                key={card.key}
                Deleteitem={Deleteitem}
                onCardMaker={onCardMaker}
                card={card}
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