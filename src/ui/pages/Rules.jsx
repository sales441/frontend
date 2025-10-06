import { useEffect, useState } from 'react';

const API_BASE = import.meta.env.VITE_API_BASE_URL || '';

async function apiGet(p) {
  const r = await fetch(`${API_BASE}${p}`);
  if (!r.ok) throw new Error(`GET ${p} -> ${r.status}`);
  return r.json();
}
async function apiPost(p, b) {
  const r = await fetch(`${API_BASE}${p}`, {
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify(b||{})
  });
  if (!r.ok) throw new Error(`POST ${p} -> ${r.status}`);
  return r.json();
}
async function apiPut(p, b) {
  const r = await fetch(`${API_BASE}${p}`, {
    method: 'PUT',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify(b||{})
  });
  if (!r.ok) throw new Error(`PUT ${p} -> ${r.status}`);
  return r.json();
}

export default function Rules(){
  const [rows,setRows]=useState([]);
  const [loading,setLoading]=useState(true);
  const [err,setErr]=useState('');
  const [name,setName]=useState('Nova Regra');

  const load = async() => {
    setLoading(true);
    try { setRows(await apiGet('/rules')); }
    catch(e){ setErr(e.message); }
    finally{ setLoading(false); }
  };

  useEffect(()=>{ load(); },[]);

  const toggle = async (id, active) => {
    await apiPut(`/rules/${id}`, { active: !active });
    load();
  };

  const saveNew = async () => {
    await apiPost('/rules', { name, active:true, testDays:5, minClicks:10 });
    setName('Nova Regra');
    load();
  };

  if(loading) return <p>Loading rules…</p>;
  if(err) return <p style={{color:'crimson'}}>Error: {err}</p>;

  return (
    <div>
      <h2>Rules & Automations</h2>

      <div style={{display:'flex', gap:8, margin:'12px 0'}}>
        <input
          value={name}
          onChange={e=>setName(e.target.value)}
          placeholder="Rule name"
          style={{padding:'8px', border:'1px solid #eee', borderRadius:8}}
        />
        <button className="btn" onClick={saveNew}>Add Rule</button>
      </div>

      <table border="1" cellPadding="8" style={{borderCollapse:'collapse', width:'100%'}}>
        <thead>
          <tr>
            <th>Active</th>
            <th>Name</th>
            <th>Test Days</th>
            <th>Early Exit ACOS</th>
            <th>Early Exit ROAS</th>
            <th>Min Clicks</th>
            <th>Toggle</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(r=>(
            <tr key={r.id}>
              <td>{r.active ? '🟢' : '⚪'}</td>
              <td>{r.name}</td>
              <td>{r.testDays}</td>
              <td>{r.earlyExitACOS ?? '-'}</td>
              <td>{r.earlyExitROAS ?? '-'}</td>
              <td>{r.minClicks}</td>
              <td>
                <button className="btn" onClick={()=>toggle(r.id, r.active)}>
                  {r.active ? 'Desativar' : 'Ativar'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}
