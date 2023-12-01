import { Navbar } from "./components/Navbar,Footer/Navbar";
import { AllRoutes } from "./components/AllRoutes";
import "./App.css";
import { useLocation } from "react-router-dom";
import { Footer } from "./components/Navbar,Footer/Footer";
import { NavDashboard } from "./components/Navbar,Footer/NavDashboard";
import { useContext } from "react";
import { AppContext } from "./contexts/AppContextProvider";

const mainDashboard = ['/dashboard', '/projects']

function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';
  const isSignupPage = location.pathname === '/signup';
  const {isAuth, userDetails} = useContext(AppContext);

  const showNavbar = !isLoginPage && !isSignupPage && !mainDashboard.includes(location.pathname);
  const showNavDashboard = mainDashboard.includes(location.pathname) && !isLoginPage && !isSignupPage;

  const isMainDashboardPage = mainDashboard.includes(location.pathname)
  const shouldRenderDashboard = isAuth && userDetails && userDetails.length > 0;

  return ( 
      <>
        {!isMainDashboardPage && showNavbar && <Navbar/>}
        {shouldRenderDashboard && showNavDashboard && <NavDashboard/>}
        <AllRoutes />
        {!isMainDashboardPage && !isLoginPage && !isSignupPage && <Footer />}
      </>
  )
}

export default App
