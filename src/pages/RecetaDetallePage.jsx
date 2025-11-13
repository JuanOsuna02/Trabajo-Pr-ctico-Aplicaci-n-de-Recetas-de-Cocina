import { useParams } from "react-router-dom";
import { useRecetas } from "../contexts/RecetasContext";
import RecetaDetalle from "../components/recetas/RecetaDetalle";

export default function RecetaDetallePage() {
  const { id } = useParams();
  const { getRecetaById } = useRecetas();
  const receta = getRecetaById(id);
  return <RecetaDetalle receta={receta} />;
}





