import React from "react";
import Logo from '../Logo/Logo'
import Search from '../Search/Search'
import Button from '../Button/Button'
import styles from './Navbar.module.css';
import HeroSection from "../HeroSection/Hero";

const Navbar =()=>{
    return (
        <>
        <nav className={styles.navbar}>
        <Logo/>
        <Search placeholder="Search any album..."/>
        <Button>Give Feedback</Button>
        </nav>
        <HeroSection/>
        </>
    )
}

export default Navbar;