import { createBrowserRouter } from "react-router-dom";
import { CreateAccount } from "../components/CreateAccount";
import { Login } from "../components/Login";
import { Start } from "../pages/Start";
import Home from "../pages/home";

const router = createBrowserRouter([
  { path: "/", element: <Start /> },
  { path: "/login", element: <Login /> },
  { path: "/createaccount", element: <CreateAccount /> },
  { path: "/home", element: <Home /> },
]);

export default router;