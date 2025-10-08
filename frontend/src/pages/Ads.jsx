import Sidebar from '../components/Sidebar.jsx';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import axios from 'axios';
import { useEffect, useState } from 'react';
export default function Ads() {
  const [campaigns, setCampaigns] = useState([]);
  const [selected, setSelected] = useState(null);
  const [keywords, setKeywords] = useState([]);
  useEffect(()=>{ fetchCampaigns(); },[]);
  const fetchCampaigns = async ()=>{ const res = await axios.get('http://localhost:5000/api/ads/campaigns'); setCampaigns(res.data.campaigns); };
  const loadKeywords = async (campId)=>{ const res = await axios.get('http://localhost:5000/api/ads/keywords/' + campId); setKeywords(res.data.keywords); setSelected(campId); };
  const applyBids = async ()=>{ const adjustments = [{ keyword: 'waxing kit', change: '+10%' }]; await axios.post('http://localhost:5000/api/ads/bids/apply', { adjustments }); alert('Ajustes aplicados (mock)'); };
  return (
    <div className='flex'>
      <Sidebar />
      <div className='flex-1 min-h-screen flex flex-col'>
        <Navbar />
        <main className='p-6 flex-1'>
          <h1 className='text-2xl font-semibold mb-4'>Campanhas Ads</h1>
          <div className='grid grid-cols-2 gap-4'>
            <div className='bg-white p-4 rounded shadow'>
              <h3 className='font-semibold mb-2'>Campanhas</h3>
              <ul>{campaigns.map(c => (<li key={c.id} className='mb-2'><div className='flex justify-between'><div>{c.name}</div><div><button onClick={()=>loadKeywords(c.id)} className='px-2 py-1 bg-gray-200 rounded'>Ver keywords</button></div></div></li>))}</ul>
            </div>
            <div className='bg-white p-4 rounded shadow'>
              <h3 className='font-semibold mb-2'>Keywords</h3>
              {selected ? (<div><ul>{keywords.map(k => (<li key={k.id} className='mb-2 flex justify-between'><div>{k.text} <span className='text-xs text-gray-500'>CTR {k.ctr}% ACOS {k.acos}%</span></div><div>{k.bids}$</div></li>))}</ul><button onClick={applyBids} className='mt-4 px-3 py-2 bg-yellow-500 rounded'>Aplicar Ajustes</button></div>) : <p>Selecione uma campanha</p>}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
