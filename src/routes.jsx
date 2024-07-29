import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home";
import { ErrorPage } from "./pages/error-page";
import { SignIn } from "./pages/sign-in";
import { SignUp } from "./pages/sign-up";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
