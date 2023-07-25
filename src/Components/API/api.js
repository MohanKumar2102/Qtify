import axios from "axios";

export const fetchTopAlbums = async()=>{
    try{
        const res = await axios.get("https://qtify-backend-labs.crio.do/albums/top");
        return res.data;
    }catch(err){
        console.log(err);
    }
}

export const fetchSongs = async()=>{
    try{
        const res = await axios.get("https://qtify-backend-labs.crio.do/songs");
        return res.data;
    }catch(err){
        console.log(err);
    }
}