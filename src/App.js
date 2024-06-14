import { useRoutes } from "react-router-dom";
import { Home } from "./pages/Home";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  let element = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
  ]);

  return (
    <QueryClientProvider
      client={
        new QueryClient({
          defaultOptions: {
            queries: {
              refetchOnWindowFocus: false,
            },
          },
        })
      }
    >
      <ReactQueryDevtools initialIsOpen={false} />
      {element}
    </QueryClientProvider>
  );
}

export default App;
