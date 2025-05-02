import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import CategoryNews from "../pages/News/CategoryNews";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import AuthLayouts from "../layouts/AuthLayouts";

const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [

            {
                index: true,
                Component: Home
            },
            {
                path: '/category/:id',
                Component: CategoryNews,
                loader: () => fetch("/news.json")
            }
        ]
    },
    {
        path: '/auth',
        Component: AuthLayouts,
        children: [
            {
                path: '/auth/login',
                Component: Login
            },
            {
                path: '/auth/register',
                Component: Register
            }
        ]
    },
    {
        path: '/news',
        element: <h2>News layout</h2>
    },
    {
        path: '/*',
        element: <h2>Error 404</h2>
    }
])

export default router;