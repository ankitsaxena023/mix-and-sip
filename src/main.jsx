import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import {
  About,
  Cocktail,
  DrinkByIngredient,
  HomeLayout,
  Landing,
  Error,
  SinglePageError,
} from "./pages";

import { loader as landingLoader } from "./pages/Landing";
import { loader as singleCocktailLoader } from "./pages/Cocktail";
import { loader as drinkByIngredientLoader } from "./pages/DrinkByIngredient";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<HomeLayout />} errorElement={<Error />}>
      <Route
        index={true}
        element={<Landing />}
        loader={landingLoader(queryClient)}
        errorElement={<SinglePageError />}
      />
      <Route
        path="cocktail/:id"
        element={<Cocktail />}
        errorElement={<SinglePageError />}
        loader={singleCocktailLoader(queryClient)}
      />
      <Route
        path="ingredient/:item"
        element={<DrinkByIngredient />}
        errorElement={<SinglePageError />}
        loader={drinkByIngredientLoader(queryClient)}
      />
      <Route path="about" element={<About />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
);
