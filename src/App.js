// import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Home";
import Signin from "./pages/Signin";
import ComingSoon from "./pages/ComingSoon";
const router = createBrowserRouter([
  { path: "/", element: <Homepage /> },
  { path: "/signin", element: <Signin /> },
  { path: "/404", element: <ComingSoon /> },
]);
function App() {
  return <RouterProvider router={router} />;
}
export default App;
