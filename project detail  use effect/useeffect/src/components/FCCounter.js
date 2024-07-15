import React, { useEffect, useState } from 'react'

function FCCounter() {

    let [score,setScore]=useState(0);
    let [wickets,setWickets]=useState(0);
    let [balls,setballs]=useState(0);
    let [overs,setOvers]=useState(0);

     useEffect(()=>{
        console.log(`FCCounter-Loaded`);
    },[]);

    useEffect(()=>{
        console.log(`FCCounter-Score Changed`)
     },[score])

     useEffect(()=>{
        console.log(`FCCounter-Wickets Changed`)
     },[wickets])

     useEffect(()=>{
        console.log(`FCCounter-any Sv Changes`)
     })

    useEffect(()=>{
        return()=>{
            console.log(`FCCounter-Unloaded`);
        }
    },[])

    
  return (
    <div className="counter">
        <h1>FC-Counter</h1>
        <h2>Score:{score}</h2>
        <h2>Wickets:{wickets}</h2>
        <button type="button" onClick={()=>{
            setScore(score+1);
        }}>Increment Score</button>
        <button type="button"onClick={()=>{
            setScore(score-1);
        }}>Decrement Score</button>
        <button type="bitton" onClick={()=>{
            setWickets(wickets+1);
        }}>Increment Wickets</button>
        <button type="bitton" onClick={()=>{
            setWickets(wickets-1);
        }}>Decrement Wickets</button>
        
    </div>
  )
}
export default FCCounter