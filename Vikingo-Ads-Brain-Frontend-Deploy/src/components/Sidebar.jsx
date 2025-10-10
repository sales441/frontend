import { Link } from "react-router-dom";
export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-900 text-gray-100 min-h-screen p-4">
      <h2 className="text-xl font-bold mb-6">Vikingo Ads Brain™</h2>
      <nav className="flex flex-col gap-2">
        <Link to="/dashboard" className="block py-2 px-3 rounded hover:bg-gray-800">Dashboard</Link>
        <Link to="/ia" className="block py-2 px-3 rounded hover:bg-gray-800">Inteligência Artificial</Link>
        <Link to="/ads" className="block py-2 px-3 rounded hover:bg-gray-800">Campanhas Ads</Link>
        <Link to="/brands" className="block py-2 px-3 rounded hover:bg-gray-800">Marcas</Link>
        <Link to="/reports" className="block py-2 px-3 rounded hover:bg-gray-800">Relatórios</Link>
      </nav>
    </aside>
  );
}
