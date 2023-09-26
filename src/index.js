import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import App2 from "./AppContext";
import App3 from "./App3";
import App4 from "./AppMemo";
import App5 from "./AppInlineFunction";
import App6 from "./AppLazy";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    {/* <App /> */}
    {/* <App2 /> */}
    {/* <App3 /> */}
    {/* <App4 /> */}
    {/* <App5 /> */}
    <App6 />
  </StrictMode>
);
