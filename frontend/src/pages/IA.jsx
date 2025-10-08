import Sidebar from '../components/Sidebar.jsx';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import axios from 'axios';
import { useState } from 'react';
export default function IA() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const runAI = async () => {
    setLoading(true);
    try {
      const res = await axios.post('http://localhost:5000/api/ai/suggest', { brand: 'Depil Bella' });
      setResult(res.data.suggestion);
    } catch (err) { setResult(null); } finally { setLoading(false); }
  };
  return (
    <div className='flex'>
      <Sidebar />
      <div className='flex-1 min-h-screen flex flex-col'>
        <Navbar />
        <main className='p-6 flex-1'>
          <h1 className='text-2xl font-semibold mb-4'>Inteligência Artificial</h1>
          <p className='mb-4'>Gere recomendações inteligentes para suas campanhas.</p>
          <button onClick={runAI} className='px-4 py-2 bg-yellow-500 rounded'>Gerar Recomendações IA</button>
          {loading && <p className='mt-3'>Gerando...</p>}
          {result && (
            <div className='mt-4 bg-white p-4 rounded shadow'>
              <h2 className='text-xl font-bold mb-2'>{result.summary}</h2>
              <p>{result.explanation}</p>
              <h3 className='mt-3 font-semibold'>Keywords para adicionar:</h3>
              <ul className='list-disc ml-6'>
                {result.keywordsToAdd.map(k => <li key={k}>{k}</li>)}
              </ul>
            </div>
          )}
        </main>
        <Footer />
      </div>
    </div>
  );
}
