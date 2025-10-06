import React, { useState } from 'react'
import ship from '../assets/ship.svg'
import Rules from '../pages/Rules'

function Home(){ return (<div><h2>Dashboard</h2><p>Theme ready. Use the sidebar to navigate.</p></div>) }

const MENU=[
 {key:'home',label:'Dashboard'},
 {key:'products',label:'Products'},
 {key:'keywords',label:'Keywords'},
 {key:'rules',label:'Rules'},
 {key:'automation',label:'Automation'},
 {key:'inventory',label:'Inventory'},
 {key:'profit',label:'Profit'},
 {key:'monthly',label:'Monthly'},
 {key:'ia',label:'IA'},
 {key:'how',label:'How to Use'},
]

export default function Dashboard({onLogout}){
  const [active,setActive]=useState('home')
  const render=()=>{
    if(active==='home') return <Home/>
    if(active==='rules') return <Rules/>
    return (<div><h2>{MENU.find(m=>m.key===active)?.label}</h2><p>Coming soon…</p></div>)
  }
  return (<div className="main">
    <aside className="sidebar">
      <div style={{display:'flex',alignItems:'center',gap:8,marginBottom:12}}>
        <img src={ship} className="small-ship" alt="ship"/><strong>Vikingo</strong>
      </div>
      {MENU.map(m=>(<a key={m.key} href="#" className={'item'+(active===m.key?' active':'')} onClick={(e)=>{e.preventDefault();setActive(m.key)}}>{m.label}</a>))}
      <div style={{marginTop:'auto'}}>
        <div style={{marginTop:24,color:'#9CA3AF',fontSize:12,display:'flex',alignItems:'center',gap:6}}>
          <img src={ship} className="small-ship" alt="ship"/><span>Powered by Vikingo Ads Brain™</span>
        </div>
        <button className="btn" style={{marginTop:12}} onClick={onLogout}>Logout</button>
      </div>
    </aside>
    <main className="content">{render()}</main>
  </div>)
}
