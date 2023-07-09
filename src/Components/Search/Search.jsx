import React from "react";
import styles from './Search.module.css';
import { useState } from "react";



const Search=({placeholder,data})=>{
    
    const [val,setVal] = useState(null);
    const onSubmit = (e)=>{
        e.preventDefault();
    }

    const changeHandler=(e)=>{
        setVal(e.target.value);
    }
    return (
        <form className={styles.wrapper} onSubmit={onSubmit}>
            <input className={styles.search} placeholder={placeholder} required value={val} onChange={changeHandler}/>
            <button className={styles.searchButton} type="submit">
                {/* <SearchIcon/> */}
            </button>

        </form>
    )
}

export default Search;