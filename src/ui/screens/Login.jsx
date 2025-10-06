import React from 'react'
import ship from '../assets/ship.svg'

export default function Login({onLogin}){
  return (
    <div>
      <header className="header">
        <div className="brand">
          <img src={ship} className="small-ship" alt="Vikingo ship" />
          <span>Vikingo Ads Brain™</span>
        </div>
        <div>🌐 PT / ES / EN</div>
      </header>

      <div style={{maxWidth:480, margin:'40px auto'}}>
        <img src={ship} className="small-ship" alt="Vikingo ship" />
        <h1>Welcome to Vikingo Ads Brain™</h1>
        <p>Manage and scale your campaigns with real intelligence.</p>
        <input className="input" placeholder="Email address" defaultValue="ivan@depilcompany.com" />
        <div style={{height:10}}/>
        <input className="input" type="password" placeholder="Password" defaultValue="Isabella0101@" />
        <div style={{height:12}}/>
        <button className="btn" onClick={onLogin}>⚔️ Log In</button>
        <div style={{color:'#6B7280', marginTop:12}}>Forgot password?</div>
      </div>

      <footer className="footer">
        <img src={ship} alt="ship" />
        <span>Powered by Vikingo Ads Brain™</span>
      </footer>
    </div>
  )
}
