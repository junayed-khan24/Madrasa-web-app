import { createBrowserRouter } from "react-router";
import Home from "../Component/Home";

const router = createBrowserRouter ([
    {
        path: "/",
        Component: Home
    }
])

export default router;