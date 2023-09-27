// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOtPeyvEHvA9KisdOaX016Zv90aSTiAqQ",
  authDomain: "fir-database-19f3d.firebaseapp.com",
  projectId: "fir-database-19f3d",
  storageBucket: "fir-database-19f3d.appspot.com",
  messagingSenderId: "541607667104",
  appId: "1:541607667104:web:4db8de549f13c7cea9b0c5",
  measurementId: "G-D0BX96GKT7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);