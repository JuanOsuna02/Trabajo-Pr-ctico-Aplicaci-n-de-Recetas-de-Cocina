import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { AccessTime, People } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function RecetaCard({ receta }) {
  const navigate = useNavigate();
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  const getDifficultyColor = (dificultad) => {
    switch (dificultad) {
      case "Fácil":
        return "#10B981"; // verde
      case "Media":
        return "#F59E0B"; // naranja
      case "Difícil":
        return "#EF4444"; // rojo
      default:
        return "#6B7280"; // gris
    }
  };

  return (
    <Card
      sx={{
        height: "520px",
        minHeight: "520px",
        maxHeight: "520px",
        width: "100%",
        maxWidth: "100%",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        borderRadius: "20px",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        boxSizing: "border-box",
        m: 0,
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0 8px 30px rgba(0, 0, 0, 0.12)",
        },
      }}
    >
      <Box sx={{ position: "relative", height: "200px !important", minHeight: "200px", maxHeight: "200px", flexShrink: 0, width: "100%" }}>
        {imageError ? (
          <Box
            sx={{
              height: "100%",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            }}
          >
            <Typography variant="body2" color="white">
              Imagen no disponible
            </Typography>
          </Box>
        ) : (
          <CardMedia
            component="img"
            image={receta.imagen}
            alt={receta.titulo}
            sx={{
              height: "200px",
              width: "100%",
              objectFit: "cover",
              display: "block",
            }}
            onError={handleImageError}
          />
        )}
        <Chip
          size="small"
          label={receta.dificultad}
          sx={{
            position: "absolute",
            top: 16,
            right: 16,
            bgcolor: getDifficultyColor(receta.dificultad),
            color: "white",
            fontWeight: 600,
            fontSize: "0.75rem",
            height: "28px",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
          }}
        />
      </Box>
      <CardContent
        sx={{
          height: "240px !important",
          minHeight: "240px",
          maxHeight: "240px",
          display: "flex",
          flexDirection: "column",
          p: 3,
          overflow: "hidden",
          flexShrink: 0,
          boxSizing: "border-box",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            mb: 1.5,
            color: "#1F2937",
            fontSize: "1.35rem",
            lineHeight: 1.3,
            height: "3.5rem",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {receta.titulo}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "#6B7280",
            mb: 2,
            fontSize: "0.9rem",
            lineHeight: 1.6,
            height: "4.05rem",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {receta.descripcion}
        </Typography>
        <Stack direction="row" spacing={1.5} sx={{ mb: 0, flexWrap: "wrap", gap: 1 }}>
          <Chip
            icon={<AccessTime sx={{ fontSize: "16px !important" }} />}
            label={receta.tiempoPreparacion}
            size="small"
            sx={{
              bgcolor: "#F3F4F6",
              color: "#374151",
              fontWeight: 500,
              border: "1px solid #E5E7EB",
            }}
          />
          <Chip
            icon={<People sx={{ fontSize: "16px !important" }} />}
            label={`${receta.porciones} porciones`}
            size="small"
            sx={{
              bgcolor: "#F3F4F6",
              color: "#374151",
              fontWeight: 500,
              border: "1px solid #E5E7EB",
            }}
          />
        </Stack>
      </CardContent>
      <CardActions sx={{ p: 3, pt: 2, pb: 3, flexShrink: 0, height: "80px !important", minHeight: "80px", maxHeight: "80px", boxSizing: "border-box" }}>
        <Button
          size="large"
          variant="contained"
          fullWidth
          onClick={() => navigate(`/recetas/${receta.id}`)}
          sx={{
            bgcolor: "#667eea",
            color: "white",
            fontWeight: 600,
            py: 1.5,
            borderRadius: "12px",
            textTransform: "none",
            fontSize: "1rem",
            "&:hover": {
              bgcolor: "#5568d3",
              boxShadow: "0 4px 12px rgba(102, 126, 234, 0.4)",
            },
          }}
        >
          Ver Receta
        </Button>
      </CardActions>
    </Card>
  );
}


