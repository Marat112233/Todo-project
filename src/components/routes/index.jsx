import { Navigate } from "react-router";
import NotFound from "../../Pages/404";
import About from "../../Pages/About";
import Home from "../../Pages/Home";
import Project from "../../Pages/Project"
export const routes = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/about",
        element: <About />
    },
    {
        path: "/project",
        element: <Project />
    },
    {
        path: "/not-found",
        element: <NotFound />
    },
    {
        path: "*",
        element: <Navigate to="/not-found" />
    }
]