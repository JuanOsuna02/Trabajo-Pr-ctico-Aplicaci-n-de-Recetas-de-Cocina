import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Link as RouterLink, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        mb: 2,
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        boxShadow: "0 4px 20px rgba(102, 126, 234, 0.3)",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ gap: 2, flexWrap: "wrap" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, flexGrow: 1 }}>
            <Typography variant="h6" sx={{ fontWeight: 700 }}>Sazón App</Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
            <Button
              color="inherit"
              component={RouterLink}
              to="/recetas"
              variant={isActive("/recetas") ? "contained" : "outlined"}
              sx={{
                borderColor: "rgba(255,255,255,0.6)",
                bgcolor: isActive("/recetas") ? "rgba(255,255,255,0.2)" : "transparent",
                "&:hover": {
                  bgcolor: "rgba(255,255,255,0.1)",
                },
              }}
            >
              Todas
            </Button>
            <Button
              color="inherit"
              component={RouterLink}
              to="/recetas?filtro=desayuno-merienda"
              variant={location.search === "?filtro=desayuno-merienda" ? "contained" : "outlined"}
              sx={{
                borderColor: "rgba(255,255,255,0.6)",
                bgcolor: location.search === "?filtro=desayuno-merienda" ? "rgba(255,255,255,0.2)" : "transparent",
                "&:hover": {
                  bgcolor: "rgba(255,255,255,0.1)",
                },
              }}
            >
              Desayuno/Merienda
            </Button>
            <Button
              color="inherit"
              component={RouterLink}
              to="/recetas?filtro=almuerzo-cena"
              variant={location.search === "?filtro=almuerzo-cena" ? "contained" : "outlined"}
              sx={{
                borderColor: "rgba(255,255,255,0.6)",
                bgcolor: location.search === "?filtro=almuerzo-cena" ? "rgba(255,255,255,0.2)" : "transparent",
                "&:hover": {
                  bgcolor: "rgba(255,255,255,0.1)",
                },
              }}
            >
              Almuerzo/Cena
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}


