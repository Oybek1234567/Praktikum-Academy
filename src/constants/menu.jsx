import { Icons } from "../assets";

export const menu = [
    {
        id: "1",
        title: "Bosh sahifa",
        path: "/",
        icon: <Icons.dashboard />
    },
    {
        id: "2",
        title: "Mening kurslarim",
        path: "/kurslar",
        icon: <Icons.courses />
    },
    {
        id: "3",
        title: "Dars jadvali",
        path: "/dars-jadvali",
        icon: <Icons.calendar/>
    },
    {
        id: "4",
        title: "O'qituvchilar",
        path: "/o'qituvchilar",
        icon: <Icons.users />
    },
    {
        id: "5",
        title: "Profil",
        path: "/profil",
        icon: <Icons.user />
    },
    {
        id: "6",
        title: "Mening to'lovlarim",
        path: "/mening-to'lovlarim",
        icon: <Icons.payments />
    },
];
