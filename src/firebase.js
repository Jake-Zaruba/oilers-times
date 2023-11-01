import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyDALRXs89toACsZTw1xDciHQsQB0VBZO9s",
  authDomain: "oilers-times.firebaseapp.com",
  projectId: "oilers-times",
  storageBucket: "oilers-times.appspot.com",
  messagingSenderId: "586027856351",
  appId: "1:586027856351:web:45449a6ad4af33bf14d46a",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_API_KEY,
//   authDomain: import.meta.env.VITE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_APP_ID,
// };
