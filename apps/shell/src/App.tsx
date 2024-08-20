import React from "react";
import ReactDOM from "react-dom/client";

import "@career-up/ui-kit/index.css";
import { Button, Icon } from "@career-up/ui-kit";

const App = () => (
  <div className="container">
    <div>Name: shell</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Empty CSS</div>
    <div>
      <Button>hi</Button>
    </div>
    <div>
      <Icon.Briefcase />
    </div>
  </div>
);
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
