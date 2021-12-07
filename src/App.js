import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header, Home, MovieDetails, Home2 } from "./components";
import "./App.css";
function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home2 />} />
          <Route exact path="/discover/page/:page" element={<Home />} />
          <Route exact path="/m/details/:id" element={<MovieDetails />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
