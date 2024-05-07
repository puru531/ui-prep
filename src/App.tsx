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

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<HomePage />} />
            <Route path="js" element={<JsLandingPage />} />
            <Route path="js/:topicId" element={<TopicContent />} />
            <Route path="react" element={<ReactLandingPage />} />
            <Route path="js/:topicId" element={<TopicContent />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
