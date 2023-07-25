import React, { useEffect } from "react";
import styles from './Card.module.css';
import {Chip, Tooltip} from "@mui/material";
// const Card = ({data,type})=>{
//     const  {image,follows, title} = props;
//     return (
//         <div className={styles.wrapper}>
//         <div className={styles.card}>
//             <img src={data.image} alt={data.title} height = "170" width="160" loading="lazy"/>
//             <div className={styles.followLikes}>
//                 <p>{data.follows} Follows</p>
//             </div>
//         </div>
//         <div className={styles.title}>
//             <p>{data.title}</p>
//         </div>
//         </div>
//     )
// }


const Card =({data,type})=>{

    useEffect(()=>{
        console.log(data[0]);
    },[])

    const getCard = (type)=>{
        switch(type){
            case "album":{
                const {image,follows,title,slug,songs} = data;
                return (
                    <Tooltip title = {`${songs.length} songs`} 
                    placement="top" arrow>
                        <div className={styles.wrapper}>
                            <div className={styles.card}>
                                <img src={image} alt={title} className={styles.img}/>
                                <div className={styles.banner}>
                                    <Chip label={`${follows} follows`}
                                    size="small" className={styles.chip}/>
                                </div>
                            </div>
                            <div className={styles.title}>
                                <p>{title}</p>
                            </div>
                        </div>
                    </Tooltip>
                )
            }
            case "song":{
                const {image,likes,title} = data;

                return (
                    <div className={styles.wrapper}>
                        <div className={styles.card}>
                            <img src={image} alt={title} loading ="lazy" className={styles.img}/>
                            <div className={styles.banner}>
                                <div className={styles.pill}>
                                    <p>{likes} likes</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.title}>
                                <p>{title}</p>
                        </div>
                    </div>
                )
            }
            default:
                return <></>;
        }
    }

    return getCard(type);
}

export default Card;