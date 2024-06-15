import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./globals.css";
import {
  AdminLandingPage,
  HomePage,
  // JsLandingPage,
  PageNotFound,
  // ReactLandingPage,
  TopicContent,
} from "./pages";
import { AppLayout, ProtectedRoute } from "./components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import CourseLandingPage from "./pages/landing-pages/CourseLandingPage";

const queryClient = new QueryClient({});
// defaultOptions: {
//   queries: {
//     staleTime: 60 * 1000,
//   },
// },

function App() {
  return (
    <main>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<HomePage />} />
              {/* <Route path="js" element={<JsLandingPage />}>
                <Route index element={<TopicContent />} />
                <Route path=":topicId" element={<TopicContent />} />
              </Route>
              <Route path="react" element={<ReactLandingPage />}>
                <Route index element={<TopicContent />} />
                <Route path=":topicId" element={<TopicContent />} />
              </Route> */}
              <Route path="/:course" element={<CourseLandingPage />}>
                <Route index element={<TopicContent />} />
                <Route path="/:course/:topicId" element={<TopicContent />} />
              </Route>
              <Route
                path="admin"
                element={
                  <ProtectedRoute>
                    <AdminLandingPage />
                  </ProtectedRoute>
                }
              />
              <Route path="*" element={<PageNotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </main>
  );
}

export default App;
