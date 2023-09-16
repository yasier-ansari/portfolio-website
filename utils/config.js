import { initializeApp, getApps, getApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { collection, doc, getDoc, addDoc, getDocs, updateDoc, increment, query, where, setDoc, serverTimestamp, getFirestore, collectionGroup } from "firebase/firestore";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    signInWithPopup,
    getRedirectResult,
    GoogleAuthProvider,
    GithubAuthProvider
} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY_2,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN_2,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID_2,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET_2,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID_2,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID_2,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID_2
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();


export const githubProvider = new GithubAuthProvider();
export const googleProvider = new GoogleAuthProvider();




const createUserDocument = async (user) => {
    const q = query(collection(db, "userProfile"), where("uid", "==", user?.uid));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
        const docRef = doc(db, "userProfile", user?.uid);
        await setDoc(docRef, {
            name: user?.displayName,
            email: user?.email,
            imgUrl: user?.photoURL,
            githubUsername: user?.reloadUserInfo.screenName,
            createdAt: serverTimestamp(),
        });
    }
};

const fetchUserProfile = async (userId) => {
    try {
        const docRef = doc(db, "userProfile", userId);
        const docSnapshot = await getDoc(docRef);

        if (docSnapshot.exists()) {
            const data = docSnapshot.data();
            return { uid: userId, ...data };
        } else {
            return null;
        }
    } catch (error) {
        console.error("Error fetching user profile:", error);
        throw error;
    }
};
const createTweet = async (userInfo, tweetContent) => {
    // Create a new tweet document
    const tweetRef = collection(db, 'userTweet');
    const docRef = doc(db, "userProfile", userInfo.uid);
    await addDoc(tweetRef, {
        userId: docRef,
        tweet: tweetContent,
        createdAt: serverTimestamp(),
    });

    const userProfileRef = doc(db, 'userProfile', userInfo?.uid);
    await setDoc(userProfileRef, {
        tweetCount: increment(1),
        lastTweetAt: serverTimestamp(),
    }, { merge: true });
};


const fetchTweetsWithUserProfiles = async () => {
    // Fetch all tweets
    const tweetsRef = collection(db, 'userTweet');
    const tweetsSnapshot = await getDocs(tweetsRef);

    // Prepare an array to store the tweets with their respective user profiles
    const tweetsWithUserProfiles = [];

    // Loop through each tweet document
    for (const tweetDoc of tweetsSnapshot.docs) {
        const tweetData = tweetDoc.data();

        // Fetch the userProfile document for the tweet's userId
        const userProfileRef = doc(db, 'userProfile', tweetData.userId.id);
        const userProfileDoc = await getDoc(userProfileRef);
        const userProfileData = userProfileDoc.data();

        // Add the tweet and userProfile data to the array
        tweetsWithUserProfiles.push({
            tweet: tweetData,
            userProfile: userProfileData,
        });
    }
    return tweetsWithUserProfiles;

};



export {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    getRedirectResult,
    onAuthStateChanged,
    signOut,
    fetchTweetsWithUserProfiles,
    createTweet,
    fetchUserProfile,
    createUserDocument
};