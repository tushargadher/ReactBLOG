import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from "./Componets/Navbar";
import Footer from "./Componets/Footer";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import Singal from "./Pages/Singal";
import Write from "./Pages/Write";
import "./style.scss";
const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/post/:id",
        element: <Singal />,
      },
      {
        path: "/write",
        element: <Write />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
const App = () => {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
};
export default App;
