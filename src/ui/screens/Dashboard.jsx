import React, { useState, useEffect } from 'react';
import ship from '../assets/ship.svg';

const API_BASE = import.meta.env.VITE_API_BASE_URL || '';

async function apiGet(path) {
  const r = await fetch(`${API_BASE}${path}`);
  if (!r.ok) throw new Error(`GET ${path} -> ${r.status}`);
  return r.json();
}

function Home() {
  return (
    <div>
      <h2>Dashboard</h2>
      <p>Theme ready. Use the sidebar to navigate.</p>
    </div>
  );
}

function Keywords() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState('');

  useEffect(() => {
    (async () => {
      try { setData(await apiGet('/keywords')); }
      catch (e) { setErr(e.message); }
      finally { setLoading(false); }
    })();
  }, []);

  if (loading) return <p>Loading keywords…</p>;
  if (err) return <p style={{ color: 'crimson' }}>Error: {err}</p>;

  return (
    <div>
      <h2>Keywords (from API)</h2>
      <table border="1" cellPadding="8" style={{ borderCollapse: 'collapse' }}>
        <thead><tr><th>Keyword</th><th>CPC</th><th>Status</th></tr></thead>
        <tbody>
          {data.map((k, i) => (
            <tr key={i}>
              <td>{k.keyword}</td>
              <td>${k.cpc}</td>
              <td>{k.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Inventory() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState('');

  useEffect(() => {
    (async () => {
      try { setRows(await apiGet('/inventory')); }
      catch (e) { setErr(e.message); }
      finally { setLoading(false); }
    })();
  }, []);

  if (loading) return <p>Loading inventory…</p>;
  if (err) return <p style={{ color: 'crimson' }}>Error: {err}</p>;

  const total = rows.reduce((acc, r) =>
    acc + (r.available + (r.reserved || 0) + (r.inbound || 0)) * (r.unit_cost || 0), 0);

  return (
    <div>
      <h2>Inventory (from API)</h2>
      <p><strong>Total stock value:</strong> ${total.toFixed(2)}</p>
      <table border="1" cellPadding="8" style={{ borderCollapse: 'collapse' }}>
        <thead><tr><th>SKU</th><th>Available</th><th>Reserved</th><th>Inbound</th><th>Unit Cost</th></tr></thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              <td>{r.sku}</td><td>{r.available}</td><td>{r.reserved}</td>
              <td>{r.inbound}</td><td>${r.unit_cost}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Profit() {
  return (
    <div>
      <h2>Profit (mock)</h2>
      <p>Hook this page to <code>/profit/daily</code> later.</p>
    </div>
  );
}

function HowTo() {
  return (
    <div>
      <h2>How to Use</h2>
      <ol>
        <li>Open <strong>Inventory</strong> to see live API data.</li>
        <li>Open <strong>Keywords</strong> to see suggestions from the backend.</li>
        <li>Rules/Automation will be wired next.</li>
      </ol>
    </div>
  );
}

const MENU = [
  { key: 'home',       label: 'Dashboard' },
  { key: 'products',   label: 'Products' },
  { key: 'keywords',   label: 'Keywords' },
  { key: 'rules',      label: 'Rules' },
  { key: 'automation', label: 'Automation' },
  { key: 'inventory',  label: 'Inventory' },
  { key: 'profit',     label: 'Profit' },
  { key: 'monthly',    label: 'Monthly' },
  { key: 'ia',         label: 'IA' },
  { key: 'how',        label: 'How to Use' },
];

export default function Dashboard({ onLogout }) {
  const [active, setActive] = useState('home');

  const render = () => {
    if (active === 'home')      return <Home />;
    if (active === 'keywords')  return <Keywords />;
    if (active === 'inventory') return <Inventory />;
    if (active === 'profit')    return <Profit />;
    if (active === 'how')       return <HowTo />;
    return (
      <div>
        <h2>{MENU.find(m => m.key === active)?.label}</h2>
        <p>Coming soon…</p>
      </div>
    );
  };

  return (
    <div className="main">
      <aside className="sidebar">
        <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:12 }}>
          <img src={ship} className="small-ship" alt="ship" />
          <strong>Vikingo</strong>
        </div>
        {MENU.map(m => (
          <a key={m.key}
             href="#"
             className={'item' + (active === m.key ? ' active' : '')}
             onClick={(e) => { e.preventDefault(); setActive(m.key); }}>
            {m.label}
          </a>
        ))}
        <div style={{ marginTop:'auto' }}>
          <div style={{ marginTop:24, color:'#9CA3AF', fontSize:12, display:'flex', alignItems:'center', gap:6 }}>
            <img src={ship} className="small-ship" alt="ship" />
            <span>Powered by Vikingo Ads Brain™</span>
          </div>
          <button className="btn" style={{ marginTop:12 }} onClick={onLogout}>Logout</button>
        </div>
      </aside>
      <main className="content">{render()}</main>
    </div>
  );
}

