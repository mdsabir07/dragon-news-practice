import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import CategoryNews from "../pages/News/CategoryNews";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import AuthLayouts from "../layouts/AuthLayouts";
import NewsDetails from "../pages/News/NewsDetails";
import PrivateRoute from "../provider/PrivateRoute";
import Loading from "../pages/Auth/Loading/Loading";

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
                hydrateFallbackElement: <Loading></Loading>,
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
        path: '/news-details/:id',
        hydrateFallbackElement: <Loading></Loading>,
        element: <PrivateRoute>
            <NewsDetails></NewsDetails>
        </PrivateRoute>,
        loader: () => fetch("/news.json")
    },
    {
        path: '/*',
        element: <h2>Error 404</h2>
    }
])

export default router;