import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import RecetasListPage from "./pages/RecetasListPage";
import RecetaDetallePage from "./pages/RecetaDetallePage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<RecetasListPage />} />
        <Route path="/recetas" element={<RecetasListPage />} />
        <Route path="/recetas/:id" element={<RecetaDetallePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
