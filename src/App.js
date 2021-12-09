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
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          exact
          path="/discover/genre=:genre/sort_by=:sortValue/page/:page"
          element={<Movies />}
        />
        <Route exact path="/m/details/:id" element={<MovieDetails />} />
        <Route exact path="/p/details/:id" element={<PeopleDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
