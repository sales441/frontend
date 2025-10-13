import Sidebar from "../components/Sidebar.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import API from "../services/api.js";
import { useState } from "react";

export default function IA() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [logMsg, setLogMsg] = useState("");

  const runAI = async () => {
    setLoading(true);
    try {
      const res = await API.post("/ai/suggest", { brand: "Depil Bella" });
      setResult(res.data.suggestion);
      setLogMsg(res.data?.suggestion?.summary || "Recomendação gerada");
    } catch {
      setResult(null);
      setLogMsg("");
    } finally {
      setLoading(false);
    }
  };

  const saveLog = async () => {
    if (!logMsg) return alert("Nada para gravar.");
    await API.post("/ai/test-log", { mensagem: logMsg });
    alert("Log gravado no Supabase (mock) ⚔️");
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 min-h-screen flex flex-col">
        <Navbar />
        <main className="p-6 flex-1">
          <h1 className="text-2xl font-semibold mb-4">Inteligência Artificial</h1>
          <div className="flex gap-3">
            <button onClick={runAI} className="px-4 py-2 bg-yellow-500 rounded">Gerar Recomendações IA</button>
            <button onClick={saveLog} className="px-4 py-2 bg-gray-800 text-white rounded">Gravar Log no Supabase</button>
          </div>
          {loading && <p className="mt-3">Gerando...</p>}
          {result && (
            <div className="mt-4 bg-white p-4 rounded shadow">
              <h2 className="text-xl font-bold mb-2">{result.summary}</h2>
              <p>{result.explanation}</p>
            </div>
          )}
        </main>
        <Footer />
      </div>
    </div>
  );
}
