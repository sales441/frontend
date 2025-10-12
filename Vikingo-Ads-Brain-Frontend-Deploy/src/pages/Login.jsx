import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api.js";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/login", { email, password });
      if (res.data.success) navigate("/dashboard");
    } catch {
      setError("Credenciais inválidas ⚠️");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-700 text-white">
      <form onSubmit={handleLogin} className="bg-gray-800 p-10 rounded-2xl shadow-xl w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">Vikingo Ads Brain™</h1>
        <input className="w-full p-3 mb-4 rounded bg-gray-700" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className="w-full p-3 mb-4 rounded bg-gray-700" placeholder="Senha" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        {error && <p className="text-red-400 mb-3">{error}</p>}
        <button className="w-full bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-semibold py-3 rounded-lg">Entrar</button>
      </form>
    </div>
  );
}

