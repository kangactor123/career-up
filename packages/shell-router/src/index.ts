import useShellEvent from "./hooks/use-shell-event";
import { injectFactory } from "./injector";
import AppRoutingManager from "./components/app-routing-manager";
import { Auth0ClientProvider } from "./providers/auth0-client-provider";
import useAuth0Client from "./hooks/use-auth0-client";

export {
  useShellEvent,
  useAuth0Client,
  injectFactory,
  AppRoutingManager,
  Auth0ClientProvider,
};

export type * from "./types";
