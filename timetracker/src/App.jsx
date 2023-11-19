import { Navbar } from "./components/Navbar,Footer/Navbar";
import { AllRoutes } from "./components/AllRoutes";
import "./App.css";
import { useLocation } from "react-router-dom";


function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';
  const isSignupPage = location.pathname === '/signup';
  const isDashboardPage = location.pathname === '/dashboard';

  return ( 
      <>
        {!isLoginPage && !isSignupPage && !isDashboardPage && <Navbar />}
        <AllRoutes />
    </>
  )
}

export default App
