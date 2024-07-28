import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./infrastructure/Root";
import { CounterContextProvider } from "./services/CounterContext/CounterContext";

const router = createBrowserRouter([{ path: "*", element: <Root /> }]);

function App() {
  return (
    <CounterContextProvider>
      <RouterProvider router={router} />
    </CounterContextProvider>
  );
}

export default App;
