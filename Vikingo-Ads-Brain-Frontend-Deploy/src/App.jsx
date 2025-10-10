import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import IA from "./pages/IA.jsx";
import Ads from "./pages/Ads.jsx";
import Brands from "./pages/Brands.jsx";
import Reports from "./pages/Reports.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/ia" element={<IA />} />
        <Route path="/ads" element={<Ads />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </BrowserRouter>
  );
}
