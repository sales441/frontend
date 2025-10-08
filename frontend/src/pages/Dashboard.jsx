import Sidebar from '../components/Sidebar.jsx';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
export default function Dashboard() {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='flex-1 min-h-screen flex flex-col'>
        <Navbar />
        <main className='p-6 flex-1'>
          <h1 className='text-3xl font-semibold mb-4'>Painel de Controle</h1>
          <div className='grid grid-cols-3 gap-4'>
            <div className='bg-white p-4 rounded shadow'>Total de campanhas: <strong>2</strong></div>
            <div className='bg-white p-4 rounded shadow'>Orçamento total: <strong>$240</strong></div>
            <div className='bg-white p-4 rounded shadow'>Recomendações IA: <strong>3</strong></div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
