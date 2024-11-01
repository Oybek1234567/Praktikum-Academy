import AuthRouters from "../app/auth/AuthRouters";
import BoshSahifa from "../pages/dashboardpages/boshsahifa";
import Dashboard from "../pages/home";

export const Router = [
    {
        id: 1,
        path: "dashboard",
        element: <Dashboard />,
    },
    {
        id: 2,
        path: "/",
        element: <AuthRouters />,
    },
    {
        id: 3,
        path: "boshsahifa",
        element: <BoshSahifa />,
    },
];
