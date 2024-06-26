# React-query

## Installation

`npm i @tanstack/react-query@4`

## App.jsx

```
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

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
      <ReactQueryDevtools initialIsOpen={false} />
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
      </QueryClientProvider>
    </main>
  );
}

export default App;

```
