import { Song } from "./Song"

export const Songs = ({fn,allSongs}) => {
  return(
    <>
    <h1>List Of All Songs</h1>
    {
    allSongs.map((currentSong,  index) => 
    < Song key ={index} fn= {fn} song = {currentSong}/>)
    }

    </>
  )
}