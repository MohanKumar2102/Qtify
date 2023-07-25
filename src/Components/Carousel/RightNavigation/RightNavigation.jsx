import React, { useState } from "react";
import {useSwiper} from "swiper/react";
import right from "../../../Assets/RightArrow/right.png";
import styles from "./RightNavigation.module.css";

function RightNavigation(){

    const swiper = useSwiper();
    // const [isEnd,setEnd] = useState(swiper.isEnd);

    return (
        <img className={styles.img} src={right} onClick={()=>{swiper.slidePrev()}}/>
    )
}

export default RightNavigation;