import { useParams } from "react-router-dom";
import { useRecetas } from "../contexts/RecetasContext";
import RecetaDetalle from "../components/recetas/RecetaDetalle";
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';

export default function RecetaDetallePage() {
  const { id } = useParams();
  const { getRecetaById } = useRecetas();
  const receta = getRecetaById(id);
  const navigate = useNavigate();

  if (!receta) {
    return (
      <Box sx={{ mt: 5, display: 'flex', justifyContent: 'center' }}>
        <Paper elevation={3} sx={{ p: 5, textAlign: 'center', maxWidth: 400 }}>
          <ReportGmailerrorredIcon sx={{ fontSize: 60, color: '#ff6b6b', mb: 2 }} />
          <Typography variant="h4" sx={{ mb: 1, fontWeight: 700 }}>Receta no encontrada</Typography>
          <Typography color="text.secondary" sx={{ mb: 3 }}>No pudimos encontrar la receta solicitada. Es posible que haya sido eliminada o el link no exista.</Typography>
          <Button variant="contained" onClick={() => navigate('/recetas')} sx={{ bgcolor: '#00c9a7', color: '#fff', fontWeight: 700 }}>Volver al Listado</Button>
        </Paper>
      </Box>
    );
  }
  return <RecetaDetalle receta={receta} />;
}






