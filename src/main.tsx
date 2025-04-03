import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/global.css";
import { LoadScript } from "@react-google-maps/api";
import { HelmetProvider } from "react-helmet-async";

const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY} libraries={["places"]}>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </LoadScript>
  </React.StrictMode>
);
