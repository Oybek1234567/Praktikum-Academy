import Dashboard from "./app/dashboard/dashboard"
import AuthRouters from "./app/auth/AuthRouters"
const App = () => {
  const isLoggedIn = true
  return (
    isLoggedIn ? <Dashboard />  : <AuthRouters />
  )
}

export default App
