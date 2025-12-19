import { createBrowserRouter } from "react-router";
import Home from "../Component/Home";
import Loading from "../Component/Loading";

const router = createBrowserRouter ([
    {
        path: "/",
        Component: Loading
    },
    {
        path: "/home",
        Component: Home
    }
])

export default router;