import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// import { seedDatabase } from "../seed";

// Seed the Database here

// Config here
const config = {
  apiKey: "AIzaSyDPa3Twmu8D2RQCLBVoRZ8VYms6cZiW0i4",
  authDomain: "netflix-clone-81557.firebaseapp.com",
  projectId: "netflix-clone-81557",
  storageBucket: "netflix-clone-81557.appspot.com",
  messagingSenderId: "623877608254",
  appId: "1:623877608254:web:7311887315f885e8cf126f",
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };
