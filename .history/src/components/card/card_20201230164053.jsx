import React from 'react';
import styles from "card.module.css";

const Card = (props) => {

    return(
    <form className={styles.form}>
                <table border="1">
            <tr>
                <th>
                    <input type="text" value="title"/>
                </th>
                <th>
                    <input type="text" value="company"/>
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
                    <input type="text" value="job"/>
                </th>
                <th>
                    <input type="text" value="email"/>
                </th>
            </tr>
            <tr width="100%">
                <th colSpan="3">
                    <input type="text" value="content"/>
                </th>
            </tr>
            <tr>
                <th colSpan="2">
                    <input type="text" value/>
                </th>
                <th colSpan="1">
                    <button>
                        Delete
                    </button>
                </th>
            </tr>
        </table>
    </form>);
}
            
    

export default Card;