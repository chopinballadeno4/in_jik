import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY ,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN ,
    projectId: process.env.REACT_APP_PROJECT_ID ,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET ,
    messagingSenderId: process.env.REACT_APP_MESSAGIN_ID ,
    appId: process.env.REACT_APP_APP_ID ,
    measurementId: process.env.REACT_APP_MEASUR_ID ,
};

export default firebase.initializeApp(firebaseConfig);
export const authService = firebase.auth();