import React, { useEffect, useState } from 'react'
import axios from 'axios'
const API = import.meta.env.VITE_API_BASE_URL
export default function Home(){
  const [msg,setMsg]=useState('Loading...')
  useEffect(()=>{ axios.get(`${API}/`).then(r=>setMsg(JSON.stringify(r.data))) },[])
  return (<div>
    <h1>Vikingo Ads Brain™ – Dashboard</h1>
    <p>Backend status: {msg}</p>
  </div>)
}
