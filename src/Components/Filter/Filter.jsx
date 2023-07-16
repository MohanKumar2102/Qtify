import { Tab,Tabs } from "@mui/material";
import React from "react";
import styles from "./Filter.module.css";

function Filter(props){
    const [filters,selectedFilterIndex, setFilterIndex] = props;

    const handleChange =(event,value)=>{
        setFilterIndex(value);
    }
    return (
        <div>
            <Tabs
            value={selectedFilterIndex}
            TabIndicatorProps={({
                style:{
                    backgroundColor:"green"
                }
            })}
            onChange={handleChange}>
                {filters.map((ele,index)=>{
                    return <Tab className={styles.tab} label = {ele.label} id={"tab-"+index}></Tab>
                })}
            </Tabs>
        </div>
    )
}

export default Filter;

