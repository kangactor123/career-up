import React, { Suspense } from "react";

import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import { appPostingBasename } from "./constants/prefix";
import Layout from "./components/layout";

const AppPostingLazy = React.lazy(() => import("./components/app-posting"));

const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Navigate to={appPostingBasename} /> },
      {
        path: `${appPostingBasename}/*`,
        element: (
          <Suspense fallback="Loading Posting..">
            <AppPostingLazy />
          </Suspense>
        ),
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={browserRouter} />;
}
