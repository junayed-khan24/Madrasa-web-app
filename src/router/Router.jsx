import { createBrowserRouter } from "react-router";
import Loading from "../Component/Loading";
import Home from "../Component/Home";
import Details from "../Component/Details";

const router = createBrowserRouter ([
    {
        path: "/",
        Component: Loading
    },
    {
        path: "/home",
        Component: Home
    },{
        path: "/details",
        Component: Details
    }
])

export default router;