import AdminProfile from "../pages/admin-profile";
import Home from "../pages/home";
import Login from "../pages/login";
import Profile from "../pages/profile";

export const publicRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
];

export const privateRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
];

export const adminRoutes = [
  {
    path: "/",
    element: <AdminProfile />,
  },
];
