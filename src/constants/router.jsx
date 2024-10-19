import AuthRouters from "../app/auth/AuthRouters";
// import Dashboard from "../app/dashboard/dashboard";

export const Router = [
    // {
    //     id: 1,
    //     path: "/",
    //     element: <Dashboard />,
    // },
    {
        id: 1,
        path: "/signin",
        element: <AuthRouters />,
    },
];
