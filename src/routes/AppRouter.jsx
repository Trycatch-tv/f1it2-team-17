import { createBrowserRouter } from "react-router-dom";

import { PATHS } from "./paths";
import Home from "../pages/Home/Home";
import Detail from "../pages/Detail/Detail";

let routes = [
  {
    path: PATHS.HOME,
    element: <Home />,
    isPrivate: true,
  },
  {
    path: PATHS.ROOT,
    element: (
      <div>
        <h1>Root page!</h1>
      </div>
    ),
  },
  {
    path: PATHS.ART_INFORMATION,
    element: <Detail />,
  },
];

routes = routes.map((route) => ({
  ...route,
}));

export const router = createBrowserRouter(routes);
