import{auth,googleprovider} from"../config/firebase1";
import { createUserWithEmailAndPassword ,signInWithPopup,signOut } from "firebase/auth";
import { useState } from "react";
 


export const Auth = () => {
    const [email,setEmail]=useState("");
    const [Passwords,setPasswords]=useState("")
    
 
    const SignIn =async ()=>{
     try{  await createUserWithEmailAndPassword(auth,email,Passwords);
    }catch(err){
        console.error(err)
    }}

    const SignInWithGoogle =async ()=>{
        try{  await signInWithPopup(auth,googleprovider);
       }catch(err){
           console.error(err)
       }}
     const logout =async ()=>{
        try{  await signOut(auth)
            console.log("logged out");
           
       }catch(err){
           console.error(err)
       }}    
       
    return(
        <div>
       <br/>
       <br/>
            <input  
            placeholder="Email..."  
            onChange={(e)=>setEmail(e.target.value)}
            />
            <input placeholder="Passwords..."
            type="password"
            onChange={(e)=>setPasswords(e.target.value)}   
            />
            <button onClick={SignIn}>Sign In</button>
            
            <button onClick={SignInWithGoogle}>
                Sign in with google </button>
            <button onClick={logout}>logout</button>
<br></br>
<br></br>
        

        </div>
    )  
}