
import './App.css';
import { useState } from 'react';
import {Auth} from "./components/auth";


import { async } from '@firebase/util';
import { abcd , search_song,playTrimmedSong} from './config/firebase1';


import{element,element3} from "./config/firebase1"
function App() {


 
return (
 
    

<div className="App">
  <div>

  </div>
  <div class="container"> 
    <Auth/>
   
    <div className="title">SonicSphere</div>
      <button onClick={abcd}>list all songs</button><br/>
      <br/>
      <br/>
      <br/>
      <input id="searchbar" type="text"
       name="search" placeholder="Search songs.."></input>
       
      <button type='submit' onClick={search_song}>find</button><br/>
      <br/>
      <br/>
      <br/>

      <input id="trimSearch" type="text"
       name="trim" placeholder="songs.."></input>
      <input id="startTime" type="text" name="start"  placeholder='start time' ></input>
      <input id="endTime" type="text" name="end"  placeholder='end time' ></input>
 
      <button type="submit" onClick={playTrimmedSong} >play trimmed song</button>
        <div id="song"></div>

  </div>



    <div class="bottom">
        <input type="range" name="range" id="myProgressBar" min="0"  max="100"></input>
        <div class="icons">
    <span > {element} </span>   
        </div>
        <div class="songInfo">
            <img src="playing.gif" width="42px" alt="" id="gif"></img> <span id="masterSongName"></span>
        </div>

    </div>
          <script src="https://kit.fontawesome.com/3989276a82.js" crossorigin="anonymous"></script>
      
 </div>
  );

  }
export default App;
