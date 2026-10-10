import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createContext } from "react";

const queryClient = new QueryClient();
const context = createContext();

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <context>
        <App />
      </context>
    </BrowserRouter>
  </QueryClientProvider>
);
