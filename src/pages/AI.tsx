import React, { useState } from 'react'
import axios from 'axios'
const API = import.meta.env.VITE_API_BASE_URL
export default function AI(){
  const [q,setQ]=useState('Give 3 ideas to lower ACOS.')
  const [out,setOut]=useState('')
  const ask=async()=>{
    const r = await axios.post(`${API}/ai/suggest`, { prompt:q })
    setOut(r.data.aiResponse || JSON.stringify(r.data))
  }
  return (<div>
    <h2>AI Assistant</h2>
    <textarea value={q} onChange={e=>setQ(e.target.value)} rows={4} style={{width:'100%'}}/>
    <br/><button onClick={ask}>Ask AI</button>
    <pre>{out}</pre>
  </div>)
}
