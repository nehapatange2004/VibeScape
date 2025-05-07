import { createContext, useContext, useState } from "react";


const AuthContext = createContext<any | null>(null);

const AuthProvider = ({ children }: React.PropsWithChildren<{}>) => {
    const [isUserLoggedIn, setIsUserLoggegIn] = useState<boolean>(true);
    return (
        <AuthContext.Provider value= {{isUserLoggedIn, setIsUserLoggegIn }}>
            {children}
        </AuthContext.Provider>
    )
}
export const auth =()=> useContext<any>(AuthContext);
export default AuthProvider;