import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ApplicationContextProvider } from "./contexts/ApplicationContextProvider";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import store from "./services/store";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApplicationContextProvider>
      <QueryClientProvider client={queryClient}>
        {/* connection redux  */}
        <Provider store={store}>
          <App />
        </Provider>
      </QueryClientProvider>
    </ApplicationContextProvider>
  </React.StrictMode>,
);
