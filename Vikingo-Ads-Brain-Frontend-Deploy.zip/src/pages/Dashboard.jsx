import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../lib/api";

export default function Dashboard(){
  const [brandId, setBrandId] = useState("depil-bella");
  const [query, setQuery] = useState("");
  const [logs, setLogs] = useState([]);
  const [status, setStatus] = useState("Verificando API...");

  useEffect(()=>{
    axios.get(API_URL + "/")
      .then(()=> setStatus("API online ✅"))
      .catch(()=> setStatus("API offline ❌"));
  }, []);

  // Mock local (sem banco)
  useEffect(()=>{
    const data = [
      { id: 1, brand: "depil-bella", time: "2025-10-07 15:10", action: "Ajuste de Lance", details: "snow foam soap — 1.25 → 1.40 (IA)" },
      { id: 2, brand: "depil-bella", time: "2025-10-07 12:33", action: "Negativação", details: "- car shampoo wholesale" },
      { id: 3, brand: "dub-boyz", time: "2025-10-06 18:02", action: "Criação de Campanha", details: "DB Snow Many — Research Exact" },
    ];
    setLogs(data);
  }, []);

  const filtered = logs.filter(l => (brandId ? l.brand === brandId : true) && (query ? (l.action + " " + l.details).toLowerCase().includes(query.toLowerCase()) : true));

  return (
    <div className="min-h-screen bg-slate-50 p-4 space-y-4">
      <header className="bg-white rounded-2xl shadow p-4 flex items-center justify-between">
        <h1 className="text-xl font-bold">Vikingo Ads Brain™</h1>
        <span className="text-sm text-slate-500">{status}</span>
      </header>

      <div className="grid grid-cols-12 gap-4">
        <aside className="col-span-12 md:col-span-3">
          <div className="bg-white rounded-2xl shadow p-4 space-y-2">
            <h2 className="text-sm font-semibold text-slate-600">Marcas</h2>
            <select className="w-full border rounded-xl p-2" value={brandId} onChange={e=>setBrandId(e.target.value)}>
              <option value="depil-bella">Depil Bella</option>
              <option value="dub-boyz">Dub Boyz</option>
              <option value="dompel">Dompel</option>
            </select>
          </div>
        </aside>
        <main className="col-span-12 md:col-span-9 space-y-4">
          <div className="bg-white rounded-2xl shadow p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold">Histórico de Ações</h3>
              <input className="border rounded-xl p-2" placeholder="Buscar..." value={query} onChange={e=>setQuery(e.target.value)} />
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead><tr className="text-left text-slate-500"><th className="py-2 pr-4">Data</th><th className="py-2 pr-4">Ação</th><th className="py-2">Detalhes</th></tr></thead>
                <tbody>
                  {filtered.length === 0 && <tr><td className="py-6 text-center text-slate-400" colSpan="3">Nenhum log</td></tr>}
                  {filtered.map(r => <tr key={r.id} className="border-t"><td className="py-2 pr-4">{r.time}</td><td className="py-2 pr-4">{r.action}</td><td className="py-2">{r.details}</td></tr>)}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
