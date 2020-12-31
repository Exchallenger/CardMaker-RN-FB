import Card from 'components/card/card';
import React from 'react';
import styles from "./editor.module.css";

const Editor = (props) => {
    const onCardMaker = () => <Card/>;
    
    return(  
        <div className={styles.div}>
            <h1 className={styles.title}>Card Maker</h1>
            <Card onCardMaker={onCardMaker}/>
            {onCardMaker()}
        </div>

    );
}
            
    
export default Editor;

{/* <section className={styles.section}>
<h1 className={styles.title}>Card Maker</h1>
<form className="form">
    <div className={styles.my1}>
        <span>jihun</span>
        <span>Samsung</span>
        <select name="Color">
            <option value="Dark">Dark</option>
            <option value="Pink">Pink</option>
            <option value="SkyBlue">SkyBlue</option>
        </select>
    </div>
    <div className={styles.my2}>
        <span>Softengineer</span>
        <span>q@naver.com</span>
    </div>
    <div className={styles.my3}>
        <input type="text" value="hi"/>
    </div>
    <div className={styles.my4}>
        <button>anna</button>
        <button>Delete</button>
    </div>
</form>
</section> */}