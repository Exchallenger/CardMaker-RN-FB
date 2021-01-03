import Editor from 'components/editor/editor';
import Preview from 'components/preview/preview';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { firebaseInstance } from 'service/firebase';
import imgfile from "../img/logo.png";
import styles from "./main.module.css";

const Main = (props) => {
    const [data ,setData] = useState('');
    const history = useHistory();
    const onLogOut = () =>{
        firebaseInstance.auth().signOut();
        history.push({
            pathname:"/"
        })
    }
    const onCardMake = (dat) =>{
        setData(dat);
        console.log(dat);
    }
    return(
        <section className={styles.all}>
            <div className={styles.header}>
                <img className={styles.img} src={imgfile} alt="logo"/>
                <span className={styles.title}>Business Card Maker</span>
                <button className={styles.btn} onClick={onLogOut}>Log out</button>
            </div>
            <section className={styles.main}>
                <Editor onCardMake={onCardMake}/>
                <Preview data={data}/>
            </section>
            <footer className={styles.footer}>
                &copy; Exchallenger 2020.12
            </footer>
        </section>
    )
};
            
   

export default Main;