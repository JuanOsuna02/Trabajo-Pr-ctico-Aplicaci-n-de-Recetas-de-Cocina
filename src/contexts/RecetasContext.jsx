import { createContext, useContext, useState } from "react";
import recetasData from "../data/recetas.json";

const RecetasContext = createContext(null);

export const RecetasProvider = ({ children }) => {
  const [recetas] = useState(recetasData);
  const isLoading = false;
  const error = null;

  const getRecetaById = (id) => recetas.find((r) => r.id === parseInt(id));

  return (
    <RecetasContext.Provider value={{ recetas, isLoading, error, getRecetaById }}>
      {children}
    </RecetasContext.Provider>
  );
};

export const useRecetas = () => useContext(RecetasContext);


