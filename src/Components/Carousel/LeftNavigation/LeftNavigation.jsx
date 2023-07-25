import React, { useEffect,useState } from "react";
import {useSwiper} from "swiper/react";
import left from "../../../Assets/LeftArrow/left.png";
import styles from "./LeftNavigation.module.css"

function LeftNavigation(){
    const swiper = useSwiper();

    // const [isBeginning,setBeginning] = useState(swiper.isBeginning);

    // useEffect(()=>{
    //     swiper.on("slideChange",function(){

    //     })
    // },[]);

    return (
        <img className={styles.img}src={left} onClick={()=>{swiper.slidePrev()}}/>
    )
}

export default LeftNavigation;