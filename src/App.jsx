import AppRouters from "./app/AppRouters"
import AuthRouters from "./app/AuthRouters"

const App = () => {
  const isLoggeedIn = false
  return (
    isLoggeedIn ? <AppRouters/> : <AuthRouters />
  )
}

export default App
