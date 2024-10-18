import LandingPage from "./layout/home/home";
import Dashboard from "./app/dashboard/dashboard";

const App = () => {
    const isLoggedIn = false;
    return <>{isLoggedIn ? <Dashboard /> : <LandingPage />}</>;
};

export default App;
