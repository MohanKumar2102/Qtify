import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Card from './Components/Card/Card';
import album from "./Assets/album.jpeg"
import Section from './Components/Section/Section';
import {fetchSongs}  from './Components/API/api';
import {fetchTopAlbums} from './Components/API/api';
import { useEffect, useState } from 'react';

function App() {  

  const [data,setData] = useState([]);
  const [songsData,setSongsData] = useState([]);

  const generateData = async()=>{
    try{
      const res = await fetchTopAlbums();
      setData(res);
      console.log(res);
    }catch(err){
      console.log(err);
    }
  }

  const generateSongsData = async()=>{
    try{
      const res = await fetchSongs();
      setSongsData(res);
    }catch(err){
      console.log(err);
    }
  }

  const filteredData = (val)=>{
    setSongsData(val);
  }

  useEffect(()=>{
    generateData();
    generateSongsData();
  },[])

  return (
    <div className="App">
    <Navbar/>
    
    {/* <Card image={album} follows={"100"} title={"Songs"}/> */}
    <div className='sectionWrapper'>
    <Section data={data} type='album' title ="Top Albums"/>
    <Section data={data} type='album' title="New Albums"/>
    <Section data={songsData} type="song" title="Songs"
     filteredData={filteredData}/> 
    </div>
    </div>
    
    
  );
}

export default App;
