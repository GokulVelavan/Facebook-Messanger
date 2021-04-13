// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import  firebase from "firebase/app"
import "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyAGoqoMeAPeUTSED1gXSSVB6QNAW9s9KKg",
    authDomain: "messanger-f3517.firebaseapp.com",
    projectId: "messanger-f3517",
    storageBucket: "messanger-f3517.appspot.com",
    messagingSenderId: "987471999722",
    appId: "1:987471999722:web:836d189e0ec62f37799d93",
    measurementId: "G-97R7S7TBXR"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();

  const timestamp=firebase.firestore.FieldValue.serverTimestamp();

  export{db,timestamp};