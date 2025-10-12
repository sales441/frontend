import { Link } from "react-router-dom";

export default function App(){
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="bg-white shadow rounded-2xl p-8 text-center space-y-4">
        <h1 className="text-3xl font-extrabold">Vikingo Ads Brain™</h1>
        <p className="text-slate-500">Frontend pronto para conectar ao backend</p>
        <Link className="inline-block rounded-xl bg-slate-900 text-white px-4 py-2" to="/login">Entrar</Link>
      </div>
    </div>
  );
}
