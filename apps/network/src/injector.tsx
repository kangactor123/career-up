import { injectFactory } from "@career-up/shell-router";

import "./index.scss";
import { routes } from "./routes";

const inject = injectFactory({
  routes,
});

export default inject;
