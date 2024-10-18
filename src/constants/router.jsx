import Home from "../layout/home/home"
import Layout from "../layout/layout"

export const Router = [
    {
        id: 1,
        path: '/',
        element: <Home />
    }
]

export const Layout = {
    id: 1,
    path: "/layout",
    element: <Layout />
}