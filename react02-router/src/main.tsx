import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import NavBar from "./declarative/nav2/NavBar.tsx";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <NavBar />
  </BrowserRouter>,
);
