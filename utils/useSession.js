import { GithubAuthProvider, signInWithPopup, signOut, getAuth } from "firebase/auth";
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
            const res = await signInWithPopup(auth, provider);
            if (!res) {
                throw new Error("Could not complete signup");
            }
            console.info(res.user, "here user");
            const rep = await fetchUserProfile(res?.user?.uid);
            if (rep) {
                setUserInfo(rep)
            } else {
                const result = await createUserDocument(res?.user);
                setUserInfo(result)
            }
        } catch (error) {
            console.log(error);
            setError(error.message);
        }
    };
    const logout = async () => {
        try {
            await signOut(auth);
            console.log("user logged out");
            setUserInfo(null);
        } catch (error) {
            console.log(error.message);
        }
    };
    return { login, session, setSession, logout };
};
