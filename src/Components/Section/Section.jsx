import React, { useState } from "react";
import styles from "./Section.module.css";
import Filter from "../Filter/Filter";


function Section(props){

    const {type, filterSource,data,title} = props;
    const [selectedFilterIndex,setSelectedFilterIndex] = useState(0);

    const [filters,setFilters] = useState([{key:"all", label :"All"}]);

    const [carouselToggle, setToggle] = useState(true);
    const handleToggle=()=>{
        setToggle(old=>!old);
    }

    const showFilter=true;

    return(
        <div className={styles.header}>
            <h3>{title}</h3>
            <h3 className={styles.toggleText} onClick={handleToggle}>
                {carouselToggle?"Show All":"Collapse"}
            </h3>
            {showFilter&&(
                <div>
                    <Filter filters={filters} selectedFilterIndex={selectedFilterIndex}
                    setSelectedFilterIndex={setSelectedFilterIndex}/>
                    </div>
            )}

            
        </div>
    )
}

export default Section;