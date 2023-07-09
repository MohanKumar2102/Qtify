import React from "react";
import Hero from '../../Assets/heroSection.png'
import styles from './Hero.module.css';


const HeroSection =()=>{
    return(
        <div className={styles.hero}>
        <img src={Hero} alt="HeroSection"/>
        </div>
    )
}

export default HeroSection;