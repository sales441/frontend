import { useState } from "react";
import axios from "axios";
import { API_URL } from "../lib/api";

export default function Login(){
  const [email, setEmail] = useState("ivan@depilcompany.com");
  const [password, setPassword] = useState("Isabella0101@");
  const [msg, setMsg] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API_URL}/login`, { email, password });
      setMsg(res.data.message || "Ok");
      if(res.status === 200){ window.location.href = "/dashboard"; }
    } catch (err) {
      setMsg("Acesso negado ❌");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-6">
      <form onSubmit={submit} className="bg-white shadow rounded-2xl p-6 w-full max-w-sm space-y-3">
        <h1 className="text-2xl font-bold">Login</h1>
        <input className="w-full border rounded-xl p-3" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" />
        <input type="password" className="w-full border rounded-xl p-3" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Senha" />
        <button className="w-full rounded-xl bg-slate-900 text-white p-3">Entrar</button>
        <p className="text-sm text-slate-500 text-center">{msg}</p>
      </form>
    </div>
  );
}
