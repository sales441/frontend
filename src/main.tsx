import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import AI from './pages/AI'

const App = () => (
  <BrowserRouter>
    <nav style={{padding:10, borderBottom:'1px solid #eee'}}>
      <Link to='/' style={{marginRight:12}}>Dashboard</Link>
      <Link to='/ai'>AI</Link>
    </nav>
    <div style={{padding:16}}>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/ai' element={<AI/>}/>
      </Routes>
    </div>
  </BrowserRouter>
)

ReactDOM.createRoot(document.getElementById('root')!).render(<App/>)
