import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup, signInAnonymously} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAZx8FyPbP_drbZp8I2jvUyWok3TEfSniQ",
  authDomain: "fighterstars.firebaseapp.com",
  databaseURL: "https://fighterstars-default-rtdb.firebaseio.com",
  projectId: "fighterstars",
  storageBucket: "fighterstars.appspot.com",
  messagingSenderId: "588078400810",
  appId: "1:588078400810:web:a34d66b3747118a35d0a53",
  measurementId: "G-C88X6BPKP3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


// Initialising Authentication
export const auth = getAuth(app);
const provider = new GoogleAuthProvider()

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider).then((result) => {
    const name = result.user.displayName;
    const email = result.user.email;
    const profilepic = result.user.profilepic;
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("profilepic", profilepic);

  }).catch((error) => {
    console.log(error, "\nerror in signing in with google");
  })
};

export const signInAnon = () => {
  signInAnonymously(auth).then((result) => {
    const name = "player";
    localStorage.setItem("name", name);
  }).catch((error) => {
    console.log(error, "\nerror in signing in anonymously");
  })
};