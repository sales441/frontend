import Sidebar from '../components/Sidebar.jsx';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import { Line } from 'react-chartjs-2';
export default function Reports() {
  const data = { labels: ['Jan','Feb','Mar','Apr','May'], datasets: [{ label: 'Vendas', data: [12,19,8,15,22], tension: 0.4 }] };
  return (
    <div className='flex'>
      <Sidebar />
      <div className='flex-1 min-h-screen flex flex-col'>
        <Navbar />
        <main className='p-6 flex-1'>
          <h1 className='text-2xl font-semibold mb-4'>Relatórios</h1>
          <div className='bg-white p-4 rounded shadow'><Line data={data} /></div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
