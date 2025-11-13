import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import RecetaCard from "./RecetaCard";
import { useRecetas } from "../../contexts/RecetasContext";
import { useSearchParams } from "react-router-dom";
import { useMemo } from "react";

export default function RecetasList() {
  const { recetas, isLoading, error } = useRecetas();
  const [searchParams] = useSearchParams();
  const filtro = searchParams.get("filtro");

  // IDs de recetas por categoría
  const desayunoMeriendaIds = [5, 8, 9]; // Panqueques, Croissants, Hummus
  const almuerzoCenaIds = [1, 2, 3, 4, 6, 7]; // Pasta, Ensalada, Pizza, Tacos, Sopa, Ramen

  // Filtrar recetas según el filtro activo
  const recetasFiltradas = useMemo(() => {
    if (!filtro) return recetas;
    
    if (filtro === "desayuno-merienda") {
      return recetas.filter((receta) => desayunoMeriendaIds.includes(receta.id));
    }
    
    if (filtro === "almuerzo-cena") {
      return recetas.filter((receta) => almuerzoCenaIds.includes(receta.id));
    }
    
    return recetas;
  }, [recetas, filtro]);

  return (
    <Container sx={{ py: 4 }} maxWidth="lg">
      <Box
        sx={{
          p: 3,
          mb: 3,
          borderRadius: "20px",
          background: "linear-gradient(135deg, rgba(102,126,234,0.1) 0%, rgba(118,75,162,0.1) 100%)",
          border: "1px solid rgba(102,126,234,0.2)",
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: 800, mb: 1 }}>
          Descubrí tu próxima comida favorita
        </Typography>
        <Typography color="text.secondary">
          Recetas curadas con tiempos, dificultad e ingredientes claros.
        </Typography>
      </Box>
      {isLoading && <Typography>Cargando recetas...</Typography>}
      {error && <Typography color="error">{error}</Typography>}
      {!isLoading && !error && (
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
            gap: 3,
            "& > *": {
              height: "520px",
              minHeight: "520px",
              maxHeight: "520px",
            },
          }}
        >
          {recetasFiltradas.map((receta) => (
            <Box
              key={receta.id}
              sx={{
                height: "520px",
                minHeight: "520px",
                maxHeight: "520px",
                width: "100%",
              }}
            >
              <RecetaCard receta={receta} />
            </Box>
          ))}
        </Box>
      )}
    </Container>
  );
}


