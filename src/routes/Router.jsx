import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PropertyDetails from "../pages/Properties/PropertyDetails";
import PrivateRoute from "./PrivateRoute";
import NotFound from "../pages/NotFound/NotFound";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <NotFound></NotFound>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/estate.json')
            },
            {
                path: '/properties/:id',
                element: <PrivateRoute><PropertyDetails></PropertyDetails></PrivateRoute>,
                loader: () => fetch('/estate.json')
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    }
]);

export default router;