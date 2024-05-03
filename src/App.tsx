import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./globals.css";
import {
  HomePage,
  JsLandingPage,
  PageNotFound,
  ReactLandingPage,
} from "./pages";
import { AppLayout } from "./components";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import store from './services/store';


const queryClient = new QueryClient();

function App() {
  return (
    <main>
      <BrowserRouter>
      <Provider store={store}>
    <QueryClientProvider client={queryClient}>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<HomePage />} />
            <Route path="js" element={<JsLandingPage />} />
            <Route path="react" element={<ReactLandingPage />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        </QueryClientProvider>
  </Provider>
      </BrowserRouter>
    </main>
  );
}

export default App;
