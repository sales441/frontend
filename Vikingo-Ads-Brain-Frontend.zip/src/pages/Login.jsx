import React, { useState } from "react";

const API = import.meta.env.VITE_API_BASE_URL || "https://vikingo-backend-pro-production.up.railway.app/api";

export default function Login() {
  const [email, setEmail] = useState("ivan@depilcompany.com");
  const [password, setPassword] = useState("Isabella0101@");
  const [msg, setMsg] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setMsg("Enviando...");
    try {
      const res = await fetch(`${API}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      if (data.success) {
        setMsg("✅ Login OK!");
      } else {
        setMsg("❌ Credenciais inválidas");
      }
      console.log(data);
    } catch (err) {
      console.error(err);
      setMsg("❌ Erro de rede");
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: 16, display: "grid", gap: 12, maxWidth: 320 }}>
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <input value={password} onChange={e => setPassword(e.target.value)} placeholder="Senha" type="password" />
      <button type="submit">Entrar</button>
      <div>{msg}</div>
      <div style={{ fontSize: 12, opacity: 0.7 }}>API: {API}</div>
    </form>
  );
}
