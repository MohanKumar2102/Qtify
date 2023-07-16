import React from "react";
import axios from "axios";
import styles from './Grid.module.css';
import { useState,useEffect } from "react";
import Card from "../Card/Card";

const Grid =()=>{

    const [topSongs,setTopSongs] = useState([]);
    const [newSongs,setNewSongs] = useState([]);

    useEffect(()=>{
        const onLoad=async()=>{

            let topSongs = await fetchTopSongs();
            let newSongs = await fetchNewSongs();

            setTopSongs(topSongs);
            setNewSongs(newSongs);
        }
        onLoad();
    },[]);
    
    const fetchTopSongs = async ()=>{
        try{
            let data = await axios.fetch("https://qtify-backend-labs.crio.do/albums/top");
            return data.data;
        }catch(e){
            alert(e);
        }
    }

    const fetchNewSongs  =async()=>{
        try{
            let data = await axios.fetch("https://qtify-backend-labs.crio.do/albums/new");
            return data.data;
        }catch(e){
            alert(e);
        }
    }

    return(
        <div className={styles.parentDiv}>
            <div className={styles.topSongs} >
              {topSongs.map((t)=>(<Card data={t}/>))}  
            </div>
            <div className={styles.newSongs}>

            </div>
        </div>
    )
}

export default Grid;