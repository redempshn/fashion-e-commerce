import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../../index.css";

import Test from "../src/Test";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "../shared/ui/ErrorFallback";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErrorBoundary fallback={<ErrorFallback />}>
      <Test />
    </ErrorBoundary>
  </StrictMode>,
);
