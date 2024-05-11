import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./globals.css";
import {
  HomePage,
  JsLandingPage,
  PageNotFound,
  ReactLandingPage,
  TopicContent,
} from "./pages";
import { AppLayout } from "./components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function App() {
  return (
    <main>
      <QueryClientProvider client={queryClient}>
      {/* <ReactQueryDevtools initialIsOpen={false}> */}
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<HomePage />} />
            <Route path="js" element={<JsLandingPage />}>
              <Route index element={<TopicContent />} />
              <Route path="js/:topicId" element={<TopicContent />} />
            </Route>
            <Route path="react" element={<ReactLandingPage />}>
              <Route index element={<TopicContent />} />
              <Route path="react/:topicId" element={<TopicContent />} />
            </Route>
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      {/* </ReactQueryDevtools> */}
      </QueryClientProvider>
    </main>
  );
}

export default App;
