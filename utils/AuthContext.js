import { createContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth, createUserDocument } from './config'
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
                // console.log(user, "user");
                const res = await fetchUserProfile(user?.uid);
                if (!res) {
                    const result = await createUserDocument(user);
                    setUserInfo(result);
                } else {
                    setUserInfo(res);
                }
            } else {
                setUserInfo(null);
            }
            setAuthReady(true);
        });
        return unsubscribe;
    }, []);

    return (
        <AuthContext.Provider
            value={{
                error,
                setError,
                userInfo,
                setUserInfo,
                authReady
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
