import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import RestaurantIcon from '@mui/icons-material/Restaurant';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  // extraer valor actual del query param buscar
  const [buscar, setBuscar] = useState(() => {
    const params = new URLSearchParams(location.search);
    return params.get('buscar') || '';
  });

  // actualizar query param con debounce
  useEffect(() => {
    const handler = setTimeout(() => {
      const params = new URLSearchParams(location.search);
      if (buscar) {
        params.set('buscar', buscar);
      } else {
        params.delete('buscar');
      }
      navigate({ search: params.toString() }, { replace: true });
    }, 350);
    return () => clearTimeout(handler);
    // eslint-disable-next-line
  }, [buscar]);

  const isActive = (path) => location.pathname === path;

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        mb: 2,
        background: "linear-gradient(90deg, #0099f7 0%, #00c9a7 100%)",
        boxShadow: "0 4px 20px rgba(0, 201, 167, 0.20)",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ gap: 2, flexWrap: "wrap" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, flexGrow: 1 }}>
            {/* Logo visual mejorado */}
            <RestaurantIcon sx={{ fontSize: 34, color: "#00C9A7", mb: "-4px", mr: 1 }} />
            <Typography
              variant="h5"
              sx={{
                fontWeight: 900,
                letterSpacing: ".03em",
                color: "#FFF",
                // Opcional: un poco de sombra para mejor legibilidad
                textShadow: "0 2px 8px rgba(30,30,80,0.10)",
                display: "inline-block",
                fontFamily: "'Montserrat', 'Inter', system-ui",
                fontSize: {xs: 22, sm: 28, md: 32},
              }}
            >
              Sazón App
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", alignItems: "center" }}>
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
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                ml: 1,
                background: 'rgba(255,255,255,0.08)',
                borderRadius: 2,
                px: 1,
              }}
            >
              <SearchIcon sx={{ color: '#00b894', mr: 0.5 }} />
              <InputBase
                placeholder="Buscar título..."
                value={buscar}
                onChange={e => setBuscar(e.target.value)}
                sx={{ color: '#fff', minWidth: 115 }}
                inputProps={{
                  'aria-label': 'buscar recetas',
                  style: { fontWeight: 500, letterSpacing: '.02em', fontFamily: 'Inter' }
                }}
              />
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}


