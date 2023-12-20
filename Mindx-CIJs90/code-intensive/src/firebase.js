import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyANBm7V-oPfhIdIMLWCn4Y_axz_qJCU1Nc",
  authDomain: "event-invitation-project.firebaseapp.com",
  projectId: "event-invitation-project",
  storageBucket: "event-invitation-project.appspot.com",
  messagingSenderId: "1042078432457",
  appId: "1:1042078432457:web:6db27212b7a0f597932118",
  measurementId: "G-4YH7Y3L81B"
};

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

export {db}