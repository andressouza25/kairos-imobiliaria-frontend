import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Imoveis from "./pages/Imoveis";
import Contato from "./pages/Contato";
import Sobre from "./pages/Sobre";
import PropertyDetails from "./pages/ImoveisDetalhados";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contato" element={<Contato />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/imoveis" element={<Imoveis />} />
      <Route path="/imoveis/:id" element={<PropertyDetails />} />
    </Routes>
  );
}
