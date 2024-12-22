import { MdShoppingCart } from "react-icons/md";
import { Icons } from "../assets";

export const menu = [
    {
        id: 1,
        title: "Bosh sahifa",
        path: "/",
        icon: <Icons.dashboard />,
    },
    {
        id: 2,
        title: "Mening kurslarim",
        path: "/kurslar",
        icon: <Icons.courses />,
    },
    {
        id: 3,
        title: "Dars jadvali",
        path: "/timetable",
        icon: <Icons.calendar />,
    },
    {
        id: 4,
        title: "O'qituvchilar",
        path: "/teachers",
        icon: <Icons.users />,
    },
    {
        id: 5,
        title: "Profil",
        path: "/profile",
        icon: <Icons.user />,
    },
    {
        id: 6,
        title: "Market",
        path: "/market",
        icon: <MdShoppingCart className='w-[32px] h-[32px]' />,
    },
    {
        id: 7,
        title: "Mening to'lovlarim",
        path: "/payments",
        icon: <Icons.payments />,
        children: {
            id: 8,
            title: "Referal",
            path: "referal",
            icon: <Icons.payments />,
        },
    },
];
