import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#667eea" }, // púrpura suave
    secondary: { main: "#764ba2" }, // púrpura oscuro
    background: {
      default: "#F9FAFB",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#1F2937",
      secondary: "#6B7280",
    },
  },
  shape: { borderRadius: 20 },
  typography: {
    fontFamily: "'Inter', system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial",
    h4: { fontWeight: 700, color: "#1F2937" },
    h5: { fontWeight: 700, color: "#1F2937" },
    h6: { fontWeight: 600, color: "#1F2937" },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          boxSizing: "border-box",
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          boxSizing: "border-box",
        },
      },
    },
    MuiCardActions: {
      styleOverrides: {
        root: {
          boxSizing: "border-box",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 12,
          fontWeight: 600,
        },
      },
    },
  },
});

export default theme;





