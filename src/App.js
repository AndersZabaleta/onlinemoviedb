import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Header from "./components/header";
import "./App.css";
const Home = lazy(() => import("./components/home"));
const Movies = lazy(() => import("./components/movies"));
const MovieDetails = lazy(() => import("./components/movieDetails"));
const PeopleDetails = lazy(() => import("./components/peopleDetails"));
const NotFound = lazy(() => import("./components/notFound"));

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Home />
            </Suspense>
          }
        />
        <Route
          exact
          path="/discover/genre=:genre/sort_by=:sortValue/page/:page"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Movies />
            </Suspense>
          }
        />

        <Route
          exact
          path="/m/details/:id"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <MovieDetails />
            </Suspense>
          }
        />
        <Route
          exact
          path="/p/details/:id"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <PeopleDetails />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <NotFound />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
};

export default App;
