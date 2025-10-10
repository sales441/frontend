import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import API from "../services/api.js";

export default function Ads() {
  const [campaigns, setCampaigns] = useState([]);
  const [keywords, setKeywords] = useState([]);
  const [selected, setSelected] = useState(null);
  const [loadingCamp, setLoadingCamp] = useState(false);
  const [loadingKeys, setLoadingKeys] = useState(false);

  useEffect(() => {
    const load = async () => {
      try {
        setLoadingCamp(true);
        const r = await API.get("/ads/campaigns");
        setCampaigns(r.data.campaigns || []);
      } catch (e) {
        console.error(e);
        setCampaigns([]);
      } finally {
        setLoadingCamp(false);
      }
    };
    load();
  }, []);

  const loadKeywords = async (id) => {
    try {
      setLoadingKeys(true);
      const r = await API.get(`/ads/keywords/${id}`);
      setSelected(id);
      setKeywords(r.data.keywords || []);
    } catch (e) {
      console.error(e);
      setKeywords([]);
    } finally {
      setLoadingKeys(false);
    }
  };

  const applyBids = async () => {
    try {
      await API.post("/ads/bids/apply", {
        adjustments: [{ keyword: "waxing kit", change: "+10%" }],
      });
      alert("Ajustes aplicados (mock) ⚔️");
    } catch (e) {
      console.error(e);
      alert("Falha ao aplicar ajustes.");
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 min-h-screen flex flex-col">
        <Navbar />
        <main className="p-6 flex-1">
          <h1 className="text-2xl font-semibold mb-4">Campanhas Ads</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Campanhas */}
            <div className="bg-white p-4 rounded shadow">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold">Campanhas</h3>
                {loadingCamp && <span className="text-sm text-gray-500">Carregando…</span>}
              </div>
              <ul>
                {campaigns.map((c) => (
                  <li key={c.id} className="mb-2 flex justify-between">
                    <span>{c.name}</span>
                    <button
                      onClick={() => loadKeywords(c.id)}
                      className="px-2 py-1 bg-gray-200 rounded"
                    >
                      Ver keywords
                    </button>
                  </li>
                ))}
                {!loadingCamp && campaigns.length === 0 && (
                  <li className="text-sm text-gray-500">Sem campanhas.</li>
                )}
              </ul>
            </div>

            {/* Keywords */}
            <div className="bg-white p-4 rounded shadow">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold">Keywords</h3>
                {loadingKeys && <span className="text-sm text-gray-500">Carregando…</span>}
              </div>

              {selected ? (
                <>
                  <ul>
                    {keywords.map((k) => (
                      <li key={k.id} className="mb-2 flex justify-between">
                        <span>
                          {k.text}{" "}
                          <span className="text-xs text-gray-500">
                            CTR {k.ctr}% · ACOS {k.acos}%
                          </span>
                        </span>
                        <span>${k.bids}</span>
                      </li>
                    ))}
                    {!loadingKeys && keywords.length === 0 && (
                      <li className="text-sm text-gray-500">Sem keywords.</li>
                    )}
                  </ul>
                  <button onClick={applyBids} className="mt-4 px-3 py-2 bg-yellow-500 rounded">
                    Aplicar Ajustes
                  </button>
                </>
              ) : (
                <p>Selecione uma campanha</p>
              )}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
