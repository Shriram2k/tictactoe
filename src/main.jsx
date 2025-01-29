import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import TicTacToe from "./Components/TicTacToe";
import "./App.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TicTacToe />
  </StrictMode>
);
