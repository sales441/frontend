import Sidebar from "../components/Sidebar.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

export default function Reports() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 min-h-screen flex flex-col">
        <Navbar />
        <main className="p-6 flex-1">
          <h1 className="text-2xl font-semibold mb-4">Relatórios</h1>
          <div className="bg-white p-4 rounded shadow">
            <p>Gráficos e métricas em breve (mock).</p>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
