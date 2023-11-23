import { Navbar } from "./components/Navbar,Footer/Navbar";
import { AllRoutes } from "./components/AllRoutes";
import "./App.css";
import { useLocation } from "react-router-dom";
import { Footer } from "./components/Navbar,Footer/Footer";

function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';
  const isSignupPage = location.pathname === '/signup';
  const isDashboardPage = location.pathname === '/dashboard';

  return ( 
      <>
        {!isLoginPage && !isSignupPage && !isDashboardPage && <Navbar />}
        <AllRoutes />
        {!isLoginPage && !isSignupPage && !isDashboardPage && <Footer />}
    </>
  )
}

export default App
