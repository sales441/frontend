import React from 'react'
import ship from '../assets/ship.svg'
export default function Dashboard({onLogout}){
 return (
  <div style={{display:'flex'}}>
   <aside className='sidebar'>
     <div style={{display:'flex',alignItems:'center',gap:8,marginBottom:12}}>
       <img src={ship} className='small-ship' alt='ship'/><strong>Vikingo</strong>
     </div>
     {['Dashboard','Products','Keywords','Rules','Automation','Inventory','Profit','Monthly','IA','How to Use'].map((x,i)=>(
       <a key={i} href='#' className={'item'+(i===0?' active':'')}>{x}</a>
     ))}
     <div style={{marginTop:24, color:'#9CA3AF', fontSize:12, display:'flex',alignItems:'center',gap:6}}>
       <img src={ship} className='small-ship' alt='ship'/>
       <span>Powered by Vikingo Ads Brain™</span>
     </div>
   </aside>
   <main className='content'>
     <h2>Dashboard (Mock)</h2>
     <p>White/orange theme shell. Replace with live widgets.</p>
     <button className='btn' onClick={onLogout}>Logout</button>
   </main>
  </div>
 )}
