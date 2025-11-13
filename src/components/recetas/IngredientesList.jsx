import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

export default function IngredientesList({ ingredientes }) {
  return (
    <List>
      {ingredientes.map((ing, idx) => (
        <ListItem key={idx} disableGutters>
          <ListItemText primary={`${ing.cantidad} ${ing.unidad} - ${ing.nombre}`} />
        </ListItem>
      ))}
    </List>
  );
}


