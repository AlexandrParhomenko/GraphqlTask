import React from "react";
import { createHashRouter } from "react-router-dom";
import SearchPage from "../../pages/SearchPage/SearchPage";
import routes from "./routes";
import CardPage from "../../pages/CardPage/CardPage";

export const routesConfig = [
  {
    element: <SearchPage />,
    index: true
  },
  {
    path: routes.card,
    element: <CardPage/>
  },
];

const router = createHashRouter(routesConfig);

export default router;