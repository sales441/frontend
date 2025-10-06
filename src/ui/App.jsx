import React, { useState } from 'react'
import ship from './assets/ship.svg'
import Login from './screens/Login'
import Loading from './screens/Loading'
import Dashboard from './screens/Dashboard'

export default function App(){
  const [authed,setAuthed]=useState(false)
  const [loading,setLoading]=useState(false)

  if(!authed){
    if(loading) return <Loading onDone={()=>{ setAuthed(true); setLoading(false) }} />
    return <Login onLogin={()=>setLoading(true)} />
  }
  return <Dashboard onLogout={()=>setAuthed(false)} />
}
