import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { AccessTime, People, ArrowBack } from "@mui/icons-material";
import IngredientesList from "./IngredientesList";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function RecetaDetalle({ receta }) {
  const navigate = useNavigate();
  const [imageError, setImageError] = useState(false);

  if (!receta) {
    return (
      <Container sx={{ py: 4 }} maxWidth="md">
        <Typography variant="h5" sx={{ mb: 2 }}>
          Receta no encontrada
        </Typography>
        <Button
          variant="contained"
          startIcon={<ArrowBack />}
          onClick={() => navigate("/recetas")}
          sx={{
            px: 3,
            py: 1.5,
            borderRadius: "12px",
            bgcolor: "#667eea",
            fontWeight: 600,
            fontSize: "1rem",
            textTransform: "none",
            "&:hover": {
              bgcolor: "#5568d3",
              boxShadow: "0 4px 12px rgba(102, 126, 234, 0.4)",
            },
          }}
        >
          Volver al Listado
        </Button>
      </Container>
    );
  }

  return (
    <Container sx={{ py: 4 }} maxWidth="md">
      <Button
        variant="outlined"
        startIcon={<ArrowBack />}
        onClick={() => navigate("/recetas")}
        sx={{
          mb: 3,
          px: 3,
          py: 1.5,
          borderRadius: "12px",
          borderColor: "#667eea",
          color: "#667eea",
          fontWeight: 600,
          fontSize: "1rem",
          textTransform: "none",
          "&:hover": {
            borderColor: "#5568d3",
            bgcolor: "#667eea",
            color: "white",
            boxShadow: "0 4px 12px rgba(102, 126, 234, 0.3)",
            transform: "translateY(-2px)",
          },
          transition: "all 0.3s ease",
        }}
      >
        Volver al Listado
      </Button>
      <Paper elevation={0} sx={{ p: 2, borderRadius: 3, boxShadow: "0 10px 30px rgba(0,0,0,0.06)" }}>
        {imageError ? (
          <Box
            sx={{
              width: "100%",
              height: 360,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: "grey.200",
              borderRadius: 3,
            }}
          >
            <Typography variant="body2" color="text.secondary">
              Imagen no disponible
            </Typography>
          </Box>
        ) : (
          <img
            src={receta.imagen}
            alt={receta.titulo}
            style={{ width: "100%", height: 360, objectFit: "cover", borderRadius: 12 }}
            onError={() => setImageError(true)}
          />
        )}
        <Typography variant="h4" sx={{ mt: 2 }}>
          {receta.titulo}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
          {receta.descripcion}
        </Typography>

        <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
          <Chip icon={<AccessTime />} label={receta.tiempoPreparacion} />
          <Chip label={receta.dificultad} color={receta.dificultad === "Fácil" ? "success" : receta.dificultad === "Media" ? "warning" : "error"} />
          <Chip icon={<People />} label={`${receta.porciones} porciones`} />
        </Stack>

        <Divider sx={{ my: 2 }} />

        <Typography variant="h6" sx={{ mb: 1 }}>Ingredientes</Typography>
        <IngredientesList ingredientes={receta.ingredientes} />

        <Divider sx={{ my: 2 }} />

        <Typography variant="h6" sx={{ mb: 1 }}>Preparación</Typography>
        <List>
          {receta.pasos.map((paso, idx) => (
            <ListItem key={idx} disableGutters>
              <ListItemText primary={`${idx + 1}. ${paso}`} />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  );
}


