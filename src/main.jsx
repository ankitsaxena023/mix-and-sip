import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import {
  About,
  Cocktail,
  HomeLayout,
  Landing,
  Newsletter,
  Error,
  SinglePageError,
} from "./pages";
import "./index.css";
import { loader as landingLoader } from "./pages/Landing";
import { loader as singleCocktailLoader } from "./pages/Cocktail";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<HomeLayout />} errorElement={<Error />}>
      <Route
        index={true}
        element={<Landing />}
        loader={landingLoader}
        errorElement={<SinglePageError />}
      />
      <Route
        path="cocktail/:id"
        element={<Cocktail />}
        errorElement={<SinglePageError />}
        loader={singleCocktailLoader}
      />
      <Route path="newsletter" element={<Newsletter />} />
      <Route path="about" element={<About />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
);
