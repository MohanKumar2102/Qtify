import React, { useEffect, useState } from "react";
import styles from "./Section.module.css";
import Filter from "../Filter/Filter";
import { Box, CircularProgress } from "@mui/material";
import BasicTabs from "../Tabs/Tabs";
import Carousel from "../Carousel/Carousel";
import Card from "../Card/Card";
import LeftNavigation from "../Carousel/LeftNavigation/LeftNavigation";
import RightNavigation from "../Carousel/RightNavigation/RightNavigation";


function Section(props){

    // const {type, filterSource,data,title} = props;
    let {data,type,title,filteredData=null} = props;
    const [selectedFilterIndex,setSelectedFilterIndex] = useState(0);

    const [filters,setFilters] = useState([{key:"all", label :"All"}]);

    const [value,setValue] = React.useState(0);
    const [carouselToggle, setToggle] = useState(true);

    const handleChange=(event,newValue)=>{
        setValue(newValue);
    }

    const generateSongsData =(key)=>{
        const res = data.filter(item=>item.genre.key===key);
        filteredData(res);
    }

    const handleToggle=()=>{
        setToggle(old=>!old);
    }

    useEffect(()=>{
        // if(value===0){
        //     filteredData(data);
        // }
        if(value===1){
            generateSongsData('rock');
        }else if(value===2){
            generateSongsData('pop');
        }
    },[value]);

    const showFilter=true;

    return(
        <div className={styles.sectionContainer}>
        <div className={styles.header}>
            <h3>{title}</h3>
            <h3 className={styles.toggleText} onClick={handleToggle}>
                {carouselToggle?"Show All":"Collapse"}
            </h3>
        </div>
        {type==="song"?<BasicTabs value={value} handleChange={handleChange}/>:null}
            {/* {showFilter&&(
                <div>
                    <Filter filters={filters} selectedFilterIndex={selectedFilterIndex}
                    setSelectedFilterIndex={setSelectedFilterIndex}/>
                    </div>
            )} */}

        {data.length===0?(
        <Box sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <CircularProgress/>
        </Box>
        ):
        <div className={styles.cardsWrapper}>
            {carouselToggle?<div className={styles.Navigation}><LeftNavigation/><div className={styles.section_card_wrapper}>
                {
                    data.map(item=>{
                        return <Card data ={item} type = {type}/>
                    })
                }
                </div><RightNavigation/></div>:
                (<Carousel className = {styles.carouselWrap} data ={data} renderComponent={(data)=<Card data ={data} type = {type}/>}/>
                )}
              </div>  }            
        </div>
    )
}

export default Section;