import { useEffect, useState } from "react"
import { Search } from "../components/Search"
import { Songs } from "../components/Songs"
import { getSongs } from "../services/api-client"
import { Player } from "../components/Player"

export const Searchpages = () => {
  const [allSongs , setSongs] = useState([]);

  const [flag , setFlag] = useState(false);
  const [song , setPlayerSong] = useState(null);
  




const loadSongs = async () => {
  setSongs(await getSongs('Latest Songs')); 
}

  useEffect (() => {
   loadSongs();
  } ,[] )

 

const tooglePlayer = (flag , songarg) => {
  setPlayerSong(songarg);
  setFlag(flag);

}



  const getArtistName = async (artistName) => {
    console.log(artistName)
    setSongs(await getSongs(artistName)); 

  }

  const jsx =<>
  <Search fn = {getArtistName}/>
 <Songs fn = {tooglePlayer} allSongs = {allSongs} />
  </>

 return (

<div className="bg-black text-white">
  

 <div className="container">
    <h1 color=" alert alert-info text-center">Melodex - Music Streaming</h1>
 


{
  flag?<Player fn = {tooglePlayer} song = {song}/>:jsx
}
 
 </div>
 </div>)

}