import { createContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from './config'
import { fetchUserProfile } from "./config";

export const AuthContext = createContext({});

export const AuthContextProvider = ({ children }) => {
    const [error, setError] = useState(false);
    const [authReady, setAuthReady] = useState(false);
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        setAuthReady(false);
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                const res = await fetchUserProfile(user.uid);
                setUserInfo(res);
                // setUserInfo(res);
            } else {
                setUserInfo(null);
            }
        });
        setAuthReady(true);
        return unsubscribe;
    }, []);

    return (
        <AuthContext.Provider
            value={{
                error,
                setError,
                userInfo,
                setUserInfo,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
