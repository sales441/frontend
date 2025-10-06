import React, { useEffect } from 'react'
import ship from '../assets/ship.svg'

export default function Loading({onDone}){
  useEffect(()=>{
    const t=setTimeout(onDone, 1200)
    return ()=>clearTimeout(t)
  },[onDone])

  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',minHeight:'70vh',gap:12}}>
      <img src={ship} className="small-ship" alt="Vikingo ship" />
      <h2>Loading Vikingo Ads Brain…</h2>
      <p>Syncing data and preparing strategies…</p>
      <div style={{width:72,height:72,borderRadius:999,border:'6px solid #ffe9c2',borderTopColor:'#FBBF24',animation:'spin 1.2s linear infinite'}}/>
      <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
    </div>
  )
}
