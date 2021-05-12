import firebase from "firebase/app";
import "firebase/firestore";
import 'firebase/storage';

const firebaseConfig = {
  appId: process.env.REACT_APP_API_APP_ID,
  databaseURL: process.env.REACT_APP_API_DATABSE_URL,
  locationID: process.env.REACT_APP_API_LOCATION_ID,
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
};

  firebase.initializeApp(firebaseConfig);

  export default firebase;