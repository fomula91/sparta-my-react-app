// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage, ref } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCYTtU28PxQqQhVbsYhRehPD779RqrzDg",
  authDomain: "mycommunity-a2861.firebaseapp.com",
  projectId: "mycommunity-a2861",
  storageBucket: "mycommunity-a2861.appspot.com",
  messagingSenderId: "302224128093",
  appId: "1:302224128093:web:a6deb182c322a9c44bf5b4",
  measurementId: "G-0YMH0JBPMZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const storage = getStorage(app);

export { storage };
