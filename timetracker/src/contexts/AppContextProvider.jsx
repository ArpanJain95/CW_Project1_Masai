import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({children}) => {
    const [isAuth, setIsAuth] = useState(false);
    const [userDetails, setUserDetails] = useState([])

    return <AppContext.Provider value = {{isAuth, setIsAuth, userDetails, setUserDetails}}>
        {children}
        </AppContext.Provider>
}