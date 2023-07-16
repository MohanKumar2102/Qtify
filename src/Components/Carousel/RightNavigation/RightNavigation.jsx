import React, { useState } from "react";
import {useSwiper} from "swiper/react";
import right from "../../../Assets/RightArrow/right.png";

function RightNavigation(){

    const swiper = useSwiper();
    // const [isEnd,setEnd] = useState(swiper.isEnd);

    return (
        <img src={right} onClick={()=>{swiper.slidePrev()}}/>
    )
}

export default RightNavigation;