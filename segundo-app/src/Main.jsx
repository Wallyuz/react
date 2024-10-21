import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {App as Teste} from "./App";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Teste/>
  </StrictMode>
);
