
import { initializeApp } from "firebase/app";

import {getAuth, GoogleAuthProvider} from "firebase/auth";

 
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle ,faPauseCircle,faForward,faBackward} from '@fortawesome/free-solid-svg-icons';

const firebaseConfig = {
  apiKey: "AIzaSyDc12zJofJ97NGIil3WGpjuVBpDp5_Og_c",
  authDomain: "sonicsphere-c88fc.firebaseapp.com",
  projectId: "sonicsphere-c88fc",
  storageBucket: "sonicsphere-c88fc.appspot.com",
  messagingSenderId: "937842007549",
  appId: "1:937842007549:web:36647dfa03c2c383584d94",
  measurementId: "G-04MMZJBB4R"
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const storage = getStorage();
export const listRef = ref(storage, 'songs/songs/');



    
export let element=<FontAwesomeIcon icon={faPlayCircle} id="masterPlay"/>

export let  element3=<FontAwesomeIcon icon={faPauseCircle} id="pause"/>


  export function search_song(){
    var bl=0;
    var test=false;
    var song = document.getElementById("song");
    listAll(listRef)
  .then((res) => {
    res.prefixes.forEach((folderRef) => {
   console.log("aaa")
    });
    let searchbarval = 
        document.getElementById("searchbar").value+'.mp3';
        // song.innerHTML+="<p>hello</p>";
        var i=0;
    res.items.forEach((itemRef) => {
      bl++;
      if(itemRef.name==searchbarval) {
        getDownloadURL(itemRef)
      .then((url) => { 
        test=true;



        let audioElement = new Audio(url);//url
        console.log(audioElement)
        // let masterPlay = document.getElementById('masterPlay');
        let masterPlay= document.getElementById('masterPlay')
        let myProgressBar = document.getElementById('myProgressBar');
        
        let masterSongName = document.getElementById(itemRef.name);// itme.ref
        
        
       
        
         
        
        // Handle play/pause click
        masterPlay.addEventListener('click', ()=>{
            if(audioElement.paused || audioElement.currentTime<=0){
              console.log("Normal wala")
                console.log(audioElement.currentTime)
                audioElement.play();
              
               element.icon=faPauseCircle
            }
            else{
                audioElement.pause();
        
                element.icon=faPlayCircle
            }
        })
        // Listen to Events
                audioElement.addEventListener('timeupdate', ()=>{ 
                    // Update Seekbar
                  let progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
                    myProgressBar.value = progress;
        })
        
        myProgressBar.addEventListener('change', ()=>{
            audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
        })
        



         
      }
    )} })
    })
    if(bl>0&&test==false)
    {
      song.innerHTML+="<p>Sorry no match!</p><br>";
    }
  };


  export function playTrimmedSong(){
 
    var bl=0;
    var test=false;
    var song = document.getElementById("song");
    listAll(listRef)
  .then((res) => {
    res.prefixes.forEach((folderRef) => {
   console.log("aaa")
    });
    let searchbarval = 
        document.getElementById("trimSearch").value+'.mp3';
        // song.innerHTML+="<p>hello</p>";
        var i=0;
    res.items.forEach((itemRef) => {
      bl++;
      if(itemRef.name==searchbarval) {
        getDownloadURL(itemRef)
      .then((url) => { 
        test=true;



        let audioElement = new Audio(url);//url
        // let masterPlay = document.getElementById('masterPlay');
        let masterPlay= document.getElementById('masterPlay')
        let myProgressBar = document.getElementById('myProgressBar');
        
        let masterSongName = document.getElementById(itemRef.name);// itme.ref
        
        let startTime1=document.getElementById('startTime').value;
        let endTime1=document.getElementById('endTime').value;
       
        console.log(song)
        console.log(document.getElementById("trimSearch").value)
        console.log(masterSongName)
        console.log(startTime1)
        console.log(endTime1)
   
           // Handle play/pause click
        masterPlay.addEventListener('click', ()=>{
                    if(audioElement.paused || audioElement.currentTime<=0){
                      console.log("clickeeee")
                      audioElement.currentTime = startTime1;
                      audioElement.play()
                      audioElement.addEventListener('timeupdate',()=>{
                    
                        if(audioElement.currentTime>=endTime1){
                          console.log("22")
                        audioElement.pause()
                        }
                      })
          }
         else{
            audioElement.pause()
          }
    
         


      
 

        // Listen to Events
                audioElement.addEventListener('timeupdate', ()=>{ 
                    // Update Seekbar
                  let progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
                    myProgressBar.value = progress;
        })
        
        myProgressBar.addEventListener('change', ()=>{
            audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
        })
        
      })


           // var audio = new Audio(url)
           // audio.play();
        // song.innerHTML+="<video src="+url+"></video><br><a href="+url+">"+itemRef.name+"</a></p><br>";
      }
    )} })
    })
    if(bl>0&&test==false)
    {
      song.innerHTML+="<p>Sorry no match!</p><br>";
    }
  };

                
  
export function playSong(){}



// Find all the prefixes and items.
export function abcd(){
listAll(listRef)
  .then((res) => {
    res.prefixes.forEach((folderRef) => {
   console.log("aaa")
    });
    var song = 
        document.getElementById("song");
        // song.innerHTML+="<p>hello</p>";
    res.items.forEach((itemRef) => {
     
      console.log(itemRef);
     
      getDownloadURL(itemRef)
      .then((url) => {
     
        console.log(url);

        song.innerHTML+="<br><a href="+url+"><p>"+itemRef.name+"</p><br>";
        
      });

    console.log("end");
    });
  }).catch((error) => {
    
  });
  

};
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar')
export const auth = getAuth(app);
export const googleprovider= new GoogleAuthProvider();


