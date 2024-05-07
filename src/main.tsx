import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "./contexts/ThemeProvider";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import store from "./services/store";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        {/* connection redux  */}
        <Provider store={store}>
          <App />
        </Provider>
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
