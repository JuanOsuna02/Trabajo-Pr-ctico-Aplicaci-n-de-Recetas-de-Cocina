import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Link as RouterLink } from "react-router-dom";

export default function Navbar() {
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
        <Toolbar disableGutters sx={{ gap: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, flexGrow: 1 }}>
            <Typography variant="h6" sx={{ fontWeight: 700 }}>Sazón App</Typography>
          </Box>
          <Button color="inherit" component={RouterLink} to="/recetas" variant="outlined" sx={{ borderColor: "rgba(255,255,255,0.6)" }}>
            Recetas
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}


