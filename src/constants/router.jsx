import CalendarPage from "../pages/calendar";
import Kurslar from "../pages/courses";
import BoshSahifa from "../pages/dashboardpages/boshsahifa";

export const Router = [    
    //Dashboard bilan AuthRoutersni olib tashadim
    {
        id: 1,
        path: "/", // / <- qolib ketibdi
        element: <BoshSahifa />,
    },
    {
        id: 2,
        path: '/kurslar',
        element: <Kurslar />
    },
    {
        id: 3,
        path: '/dars-jadvali',
        element: <CalendarPage />
    }
];
