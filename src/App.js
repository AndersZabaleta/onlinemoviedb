import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Header,
  Movies,
  MovieDetails,
  Home,
  NotFound,
  PeopleDetails,
} from "./components";
import "./App.css";
function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/discover/page/:page" element={<Movies />} />
          <Route exact path="/m/details/:id" element={<MovieDetails />} />
          <Route exact path="/p/details/:id" element={<PeopleDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
