import React, { useRef } from 'react';
import styles from "./card.module.css";

const Card = ({Deleteitem,onCardMaker,card})=>{//onSubmit}) => {
    const formRef = useRef();
    const titleRef= useRef();
    const companyRef= useRef();
    const jobRef= useRef();
    const emailRef= useRef();
    const contentRef= useRef();
    const nameRef= useRef();

    const onSubmit = (event) =>{
        event.preventDefault();
        const getCard = {
            id :  Date.now(),
            title:titleRef.current.value || '',
            company:companyRef.current.value || '',
            job:jobRef.current.value || '',
            email:emailRef.current.value || '',
            content:contentRef.current.value || '',
            name:nameRef.current.value || '',
            fileName: '',
            fileURL: ''
        };
        formRef.current.reset();
        onCardMaker(getCard);
        }
    const onDelete = (event) =>{
        event.preventDefault();
        console.log(card);
        Deleteitem(card);
    }
    return(
    <form ref={formRef} className={styles.form}>
                <table border="1" className={styles.table}>
            <tr>
                <th>
                    <input ref={titleRef} type="text" placeholder="title"/>
                </th>
                <th>
                    <input ref={companyRef} type="text" placeholder="company"/>
                </th>
                <th>
                    <select name="Color">
                        <option value="Dark">Dark</option>
                        <option value="Pink">Pink</option>
                        <option value="SkyBlue">SkyBlue</option>
                    </select>
                </th>
            </tr>
            <tr>
                <th>
                    <input ref={jobRef} type="text" placeholder="job"/>
                </th>
                <th colSpan="2" >
                    <input ref={emailRef} type="text" placeholder="email"/>
                </th>
            </tr>
            <tr width="100%">
                <th colSpan="3">
                    <input ref={contentRef} type="text" placeholder="content"/>
                </th>
            </tr>
            <tr>
                <th colSpan="1">
                    <input ref={nameRef} type="text" placeholder="name"/>
                </th>
                <th colSpan="1">
                    <button className={styles.btn} onClick={onDelete} >
                        Delete
                    </button>
                </th>
                <th colSpan="1">
                    <button onClick={onSubmit} className={styles.subBtn}>Submit</button>
                </th>
            </tr>
        </table>
    </form>);
}
            
export default Card;