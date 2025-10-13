import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://seu-backend.up.railway.app/api/auth/login",
        { email, password }
      );
      setMessage(res.data.message);
    } catch (err) {
      setMessage("Credenciais inválidas ⚠️");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      {/* Cabeçalho com o barco */}
      <div className="flex flex-col items-center mb-8">
        <img
          src="/viking-ship.png"
          alt="Barco Viking"
          className="w-24 h-24 animate-bounce"
        />
        <h1 className="text-3xl font-bold text-yellow-500 mt-3">
          ⚔️ Vikingo Ads Brain ⚔️
        </h1>
      </div>

      {/* Formulário */}
      <form
        onSubmit={handleLogin}
        className="bg-gray-800 p-6 rounded-xl shadow-lg w-80"
      >
        <label className="block mb-3">
          <span className="text-sm text-gray-300">Email</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 mt-1 rounded bg-gray-700 text-white"
            placeholder="ivan@depilcompany.com"
          />
        </label>

        <label className="block mb-5">
          <span className="text-sm text-gray-300">Senha</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 mt-1 rounded bg-gray-700 text-white"
            placeholder="********"
          />
        </label>

        <button
          type="submit"
          className="w-full bg-yellow-600 hover:bg-yellow-500 p-2 rounded font-semibold"
        >
          Entrar
        </button>
      </form>

      {message && <p className="mt-4 text-sm text-gray-300">{message}</p>}

      {/* Rodapé */}
      <footer className="absolute bottom-4 flex items-center space-x-2 text-sm text-gray-400">
        <img src="/viking-ship.png" alt="Barco" className="w-6 h-6" />
        <span>⚔️ Vikingo Ads Brain — Força e Estratégia ⚔️</span>
      </footer>
    </div>
  );
}

