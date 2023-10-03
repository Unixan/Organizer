import { createBrowserRouter } from "react-router-dom";
import { CreateAccount } from "../pages/CreateAccount";
import { Login } from "../pages/Login";
import { Start } from "../pages/Start";
import Home from "../pages/Home";

const router = createBrowserRouter([
  { path: "/", element: <Start /> },
  { path: "/login", element: <Login /> },
  { path: "/createaccount", element: <CreateAccount /> },
  { path: "/home", element: <Home /> },
]);

export default router;
