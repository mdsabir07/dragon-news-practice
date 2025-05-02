import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import CategoryNews from "../pages/News/CategoryNews";

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
        element: <h2>Authentication layout</h2>
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