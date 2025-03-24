// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore"
import { toast } from "react-toastify";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPH-CRbOTJRZAyeug86mSl5jb7Zfgu_7Q",
  authDomain: "netflix-clone-f9d26.firebaseapp.com",
  projectId: "netflix-clone-f9d26",
  storageBucket: "netflix-clone-f9d26.firebasestorage.app",
  messagingSenderId: "673369854222",
  appId: "1:673369854222:web:099cb98579980d8102c75f",
  measurementId: "G-3EBT4E2LEH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const auth = getAuth(app)
const db = getFirestore(app);



const signup = async (name,email,password)=>{
    try{
        const res = await createUserWithEmailAndPassword(auth, email,password);
        const user = res.user;
        await addDoc(collection(db,"user"),{
            uid:user.uid,
            name,
            authProvider:"local",
            email
        })
    }catch(error){
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "))
    }
}

const login = async(email,password)=>{
    try {
        await signInWithEmailAndPassword(auth,email,password)
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const logout = ()=>{
    signOut(auth)
}


export {auth,db, login,signup,logout};