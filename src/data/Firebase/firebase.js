import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAhy0mKgXF8XGGs9BCaXup5sVnfk0BaW3M",
  authDomain: "escape-fpv-stock.firebaseapp.com",
  projectId: "escape-fpv-stock",
  storageBucket: "escape-fpv-stock.appspot.com",
  messagingSenderId: "821051950535",
  appId: "1:821051950535:web:2bb0560bbf79e91bb045e2",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
