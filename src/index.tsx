// Rendering
import React from "react";
import ReactDOM from "react-dom/client";
// Main Components
import App from "./App";
// Tailwind CSS Styling
import "./global.css";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)