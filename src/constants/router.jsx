import AuthRouters from "../app/auth/AuthRouters";
import Dashboard from "../pages/home";
// import Dashboard from "../app/dashboard/dashboard";

export const Router = [
    // {
    //     id: 1,
    //     path: "/",
    //     element: <Dashboard />,
    // },
    {
        id: 1,
        path: "/dashboard",
        element: <Dashboard />,
    },
    {
        id: 2,
        path: "/",
        element: <AuthRouters />,
    },
    
];
