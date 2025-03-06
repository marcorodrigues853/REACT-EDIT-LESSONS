import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import HomePage from "./pages/HomePage.jsx";
import Continents from "./pages/Continents.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Navbar from "./pages/NavBar.jsx";
import CountryPage from "./pages/CountryPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <nav style={{ display: "flex", gap: "12px" }}></nav>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="home" element={<HomePage />}></Route>
        <Route path="continents" element={<Continents />}></Route>
        <Route path="country/:name" element={<CountryPage />}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
