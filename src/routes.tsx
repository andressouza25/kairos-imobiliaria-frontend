import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Imoveis from "./pages/Imoveis";
import Contato from "./pages/Contato";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/imoveis" element={<Imoveis />} />
      <Route path="/contato" element={<Contato />} />
    </Routes>
  );
}
