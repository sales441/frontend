import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await API.post("/auth/login", { email, password });
      if (res.data?.success) {
        navigate("/dashboard");
      } else {
        setError("Credenciais inválidas ⚠️");
      }
    } catch {
      setError("Credenciais inválidas ⚠️");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-700 text-white">
      <form onSubmit={handleLogin} className="bg-gray-800 p-10 rounded-2xl shadow-xl w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">Vikingo Ads Brain™</h1>

        <input
          className="w-full p-3 mb-4 rounded bg-gray-700 placeholder-gray-300 outline-none"
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
        />

        <input
          className="w-full p-3 mb-4 rounded bg-gray-700 placeholder-gray-300 outline-none"
          placeholder="Senha"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />

        {error && <p className="text-red-400 mb-3">{error}</p>}

        <button
          type="submit"
          className="w-full bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-semibold py-3 rounded-lg"
        >
          Entrar
        </button>

        <div className="mt-3 text-xs text-gray-300">
          <p>Login padrão de teste:</p>
          <p>ivan@depilcompany.com / Isabella0101@</p>
        </div>
      </form>
    </div>
  );
}
