import React,{useEffect,useState} from 'react'
import ship from '../assets/ship.svg'
import Rules from '../pages/Rules'
import Profit from '../pages/Profit'
import Inventory from '../pages/Inventory'
import Keywords from '../pages/Keywords'
import AI from '../pages/AI'
import Automation from '../pages/Automation'
import HowTo from '../pages/HowTo'
import { ComposedChart, Line, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts'

const API_BASE = import.meta.env.VITE_API_BASE_URL || ''

function KPI({title,value,delta}){
  const sign=delta>0?'+':''; const color=delta>=0?'#059669':'#DC2626'
  return(<div className='kpi'><div className='kpi-title'>{title}</div><div className='kpi-value'>{value}</div>{delta!=null&&<div className='kpi-delta' style={{color}}>{sign}{delta}% vs prev</div>}</div>)
}

function DashboardHome(){
  const [metrics,setMetrics]=useState(null)
  const [data,setData]=useState([])
  const [tab,setTab]=useState('kpis')

  useEffect(()=>{(async()=>{
    try{
      const m=await fetch(`${API_BASE}/dashboard/metrics`).then(r=>r.json())
      const c=await fetch(`${API_BASE}/dashboard/chart`).then(r=>r.json())
      setMetrics(m); setData(c)
    }catch(e){ setMetrics(null); setData([]) }
  })()},[])

  return(<div>
    <h2>Dashboard</h2>
    <div className='tabs'>
      <button className={'btn'+(tab==='kpis'?' active':'')} onClick={()=>setTab('kpis')}>Sales + TACOS/ACOS/ROAS</button>
      <button className={'btn'+(tab==='spend'?' active':'')} onClick={()=>setTab('spend')}>Ad Spend vs Revenue</button>
    </div>
    {metrics&&(<div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:12,marginBottom:12}}>
      <KPI title='TACOS' value={`${metrics.tacos.value}%`} delta={Number((metrics.tacos.value-metrics.tacos.prev).toFixed(1))}/>
      <KPI title='ACOS' value={`${metrics.acos.value}%`} delta={Number((metrics.acos.value-metrics.acos.prev).toFixed(1))}/>
      <KPI title='ROAS' value={`${metrics.roas.value}x`} delta={Number((metrics.roas.value-metrics.roas.prev).toFixed(1))}/>
      <KPI title='Sales' value={`$${metrics.sales.value}`} delta={Number((((metrics.sales.value-metrics.sales.prev)/metrics.sales.prev)*100).toFixed(1))}/>
      <KPI title='Spend' value={`$${metrics.spend.value}`} delta={Number((((metrics.spend.value-metrics.spend.prev)/metrics.spend.prev)*100).toFixed(1))}/>
      <KPI title='Orders' value={`${metrics.orders.value}`} delta={Number((((metrics.orders.value-metrics.orders.prev)/metrics.orders.prev)*100).toFixed(1))}/>
      <KPI title='CTR' value={`${metrics.ctr.value}%`} delta={Number((metrics.ctr.value-metrics.ctr.prev).toFixed(1))}/>
      <KPI title='CVR' value={`${metrics.cvr.value}%`} delta={Number((metrics.cvr.value-metrics.cvr.prev).toFixed(1))}/>
    </div>)}
    <div style={{height:320,background:'#fff',border:'1px solid #eee',borderRadius:12,padding:12}}>
      <ResponsiveContainer width='100%' height='100%'>
        {tab==='kpis' ? (
          <ComposedChart data={data}>
            <XAxis dataKey='date'/>
            <YAxis yAxisId='left'/>
            <YAxis yAxisId='right' orientation='right'/>
            <Tooltip/><Legend/>
            <Bar yAxisId='left' dataKey='sales' name='Sales'/>
            <Line yAxisId='right' type='monotone' dataKey='tacos' name='TACOS' stroke='#2563EB'/>
            <Line yAxisId='right' type='monotone' dataKey='acos' name='ACOS' stroke='#F97316'/>
            <Line yAxisId='right' type='monotone' dataKey='roas' name='ROAS' stroke='#8B5CF6'/>
          </ComposedChart>
        ) : (
          <ComposedChart data={data}>
            <XAxis dataKey='date'/>
            <YAxis/><Tooltip/><Legend/>
            <Bar dataKey='sales' name='Revenue'/>
            <Line type='monotone' dataKey='spend' name='Ad Spend' stroke='#F97316'/>
          </ComposedChart>
        )}
      </ResponsiveContainer>
    </div>
  </div>)
}

const MENU=[
 {key:'home',label:'Dashboard'},
 {key:'rules',label:'Rules'},
 {key:'profit',label:'Profit'},
 {key:'inventory',label:'Inventory'},
 {key:'keywords',label:'Keywords'},
 {key:'ai',label:'AI'},
 {key:'automation',label:'Automation'},
 {key:'how',label:'How to Use'},
]

export default function Dashboard({onLogout}){
  const [active,setActive]=useState('home')
  const render=()=>{
    if(active==='home') return <DashboardHome/>
    if(active==='rules') return <Rules/>
    if(active==='profit') return <Profit/>
    if(active==='inventory') return <Inventory/>
    if(active==='keywords') return <Keywords/>
    if(active==='ai') return <AI/>
    if(active==='automation') return <Automation/>
    if(active==='how') return <HowTo/>
    return(<div><h2>{MENU.find(m=>m.key===active)?.label}</h2><p>Coming soon…</p></div>)
  }
  return(<div className='main'>
    <aside className='sidebar'>
      <div style={{display:'flex',alignItems:'center',gap:8,marginBottom:12}}>
        <img src={ship} className='small-ship' alt='ship'/><strong>Vikingo Ads Brain™</strong>
      </div>
      {MENU.map(m=>(<a key={m.key} href='#' className={'item'+(active===m.key?' active':'')} onClick={(e)=>{e.preventDefault();setActive(m.key)}}>{m.label}</a>))}
      <div style={{marginTop:'auto'}}>
        <div style={{marginTop:24,color:'#9CA3AF',fontSize:12,display:'flex',alignItems:'center',gap:6}}>
          <img src={ship} className='small-ship' alt='ship'/><span>Powered by Vikingo Ads Brain™</span>
        </div>
        <button className='btn' style={{marginTop:12}} onClick={onLogout}>Logout</button>
      </div>
    </aside>
    <main className='content'>{render()}</main>
  </div>)
}
