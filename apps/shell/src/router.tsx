import React, { Suspense } from "react";

import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import {
  appEduBasename,
  appNetworkBasename,
  appPostingBasename,
} from "./constants/prefix";
import Layout from "./components/layout";

import { Auth0ProviderWithNavigator } from "./components/auth0-provider-with-navigator";

const AppPostingLazy = React.lazy(() => import("./components/app-posting"));
const AppEduLazy = React.lazy(() => import("./components/app-edu"));
const AppNetworkLazy = React.lazy(() => import("./components/app-network"));

const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <Auth0ProviderWithNavigator>
        <Layout />
      </Auth0ProviderWithNavigator>
    ),
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
      {
        path: `${appEduBasename}/*`,
        element: (
          <Suspense fallback="Loading Edu..">
            <AppEduLazy />
          </Suspense>
        ),
      },
      {
        path: `${appNetworkBasename}/*`,
        element: (
          <Suspense fallback="Loading Network..">
            <AppNetworkLazy />
          </Suspense>
        ),
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={browserRouter} />;
}
