import {
  AppRoutingManager,
  Auth0ClientProvider,
} from "@career-up/shell-router";
import React from "react";
import { type RouteObject } from "react-router-dom";
import Layout from "./components/layout";
import PageList from "./pages/list";
import PageDetail from "./pages/list/detail";

const domain = process.env.REACT_APP_AUTH0_DOMAIN!;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID!;
const redirectUri = process.env.REACT_APP_AUTH0_CALLBACK_URL!;

export const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <Auth0ClientProvider options={{ domain, clientId, redirectUri }}>
        <Layout>
          <AppRoutingManager type="app-edu"></AppRoutingManager>
        </Layout>
      </Auth0ClientProvider>
    ),
    errorElement: <div>App Edu Error</div>,
    children: [
      { index: true, element: <PageList /> },
      { path: ":id", element: <PageDetail /> },
    ],
  },
];
