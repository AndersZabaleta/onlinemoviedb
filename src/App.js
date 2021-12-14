import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Spinner from "./shared/components/spinner";
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
            <Suspense fallback={<Spinner />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          exact
          path="/discover/genre=:genre/sort_by=:sortValue/page/:page"
          element={
            <Suspense fallback={<Spinner />}>
              <Movies />
            </Suspense>
          }
        />

        <Route
          exact
          path="/m/details/:id"
          element={
            <Suspense fallback={<Spinner />}>
              <MovieDetails />
            </Suspense>
          }
        />
        <Route
          exact
          path="/p/details/:id"
          element={
            <Suspense fallback={<Spinner />}>
              <PeopleDetails />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<Spinner />}>
              <NotFound />
            </Suspense>
          }
        />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
