import React,{useEffect} from 'react'
import ship from '../assets/ship.svg'
export default function Loading({onDone}){
 useEffect(()=>{const t=setTimeout(onDone,1500);return()=>clearTimeout(t)},[onDone])
 return (
  <div className='container center'>
    <img src={ship} className='small-ship' alt='Vikingo ship'/>
    <h2>Loading Vikingo Ads Brain…</h2>
    <p>Syncing data and preparing strategies…</p>
    <div className='spinner'></div>
  </div>
 )}
