import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthContextProvider } from "./Context/AuthContextProvider";
import { UserContextProvider } from "./Context/UserContextProvider";
import { Provider } from "react-redux";
import store from "./App/Store/store";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Provider store={store}>
        <AuthContextProvider>
          <UserContextProvider>
            <App />
          </UserContextProvider>
        </AuthContextProvider>
      </Provider>
    </BrowserRouter>
  </QueryClientProvider>,
);
