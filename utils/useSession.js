import { GithubAuthProvider, signInWithRedirect, signInWithPopup, signOut, getAuth } from "firebase/auth";
import { useContext, useEffect, useState } from "react";
import { createUserDocument } from "./config";
import { fetchUserProfile } from "./config";
import { AuthContext } from "./AuthContext";

export default function useSession() {
    const [session, setSession] = useState(null);
    const provider = new GithubAuthProvider();
    const auth = getAuth();
    const { setUserInfo, setError } = useContext(AuthContext);

    const login = async () => {
        setError(null);
        try {
            const res = await signInWithRedirect(auth, provider);
            if (!res) {
                setError("Could not complete signup");
                throw new Error("Could not complete signup");
            }
            const rep = await fetchUserProfile(res?.user?.uid);
            if (rep) {
                setUserInfo(rep)
                setSession(rep)
            } else {
                const result = await createUserDocument(res?.user);
                setUserInfo(result)
                setSession(result)
            }
        } catch (error) {
            setError(error.message);
        }
    };
    const logout = async () => {
        try {
            await signOut(auth);
            setUserInfo(null);
        } catch (error) {
            setError(error.message);
        }
    };
    return { login, session, setSession, logout };
};
