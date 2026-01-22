import { createBrowserRouter } from "react-router";
import Home from "../pages/home/Home";
import ResidentSignUp from "../pages/auth/ResidentSignUp";
import ResidentLogin from "../pages/auth/ResidentLogin";
import AdminLogin from "../pages/auth/AdminLogin";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/signUp", element: <ResidentSignUp /> },
  { path: "/login", element: <ResidentLogin /> },
  { path: "/admin/login", element: <AdminLogin /> }

]);

export default router;