import { RouterProvider } from "react-router-dom";
import { routes } from "./routes";
import { AuthProvider } from "./contexts/auth-context";

export const App = () => {
  return (
    <>
      <AuthProvider>
        <RouterProvider router={routes} />
      </AuthProvider>
    </>
  );
};
