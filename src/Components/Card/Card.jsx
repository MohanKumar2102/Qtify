import React from "react";
import axios from "axios";
import styles from './Card.module.css';

const Card = (props)=>{
    const  {image,follows, title} = props;
    return (
        <div className={styles.wrapper}>
        <div className={styles.card}>
            <img src={image} alt={title} height = "170" width="160" loading="lazy"/>
            <div className={styles.followLikes}>
                <p>{follows} Follows</p>
            </div>
        </div>
        <div className={styles.title}>
            <p>{title}</p>
        </div>
        </div>
    )
}

export default Card;