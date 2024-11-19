import CalendarPage from "../pages/calendar";
import FinishedTopicsPage from "../pages/calendar/finishedTopics/finishedTopics";
import FilesPage from "../pages/calendar/topics/files";
import HomeworkPage from "../pages/calendar/topics/homework";
import InfoPage from "../pages/calendar/topics/info";
import TestPage from "../pages/calendar/topics/test";
import TopicsPage from "../pages/calendar/topics/topics";
import Kurslar from "../pages/courses";
import BoshSahifa from "../pages/dashboardpages/boshsahifa";

export const Router = [    
    {
        id: 1,
        path: "/",  
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
    },
    {
        id: 4,
        path: "/topics",
        element: <TopicsPage />,
    }, 
    {
        id: 5,
        path: "finished_topics",
        element: <FinishedTopicsPage />
    },
    {
        id: 6,
        path: '/info',
        element: <InfoPage/>
    },
    {
        id: 7,
        path: "/files",
        element: <FilesPage/>
    },
    {
        id: 8,
        path: "/homework",
        element: <HomeworkPage />
    },
    {
        id: 9,
        path: "/test",
        element: <TestPage />
    }
];
