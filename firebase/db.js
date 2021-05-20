import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC19EFzLPf8ncq2ydpEDHlPZsNwqRjYUjw",
    authDomain: "webshopapi-8f487.firebaseapp.com",
    projectId: "webshopapi-8f487",
    storageBucket: "webshopapi-8f487.appspot.com",
    messagingSenderId: "822007052012",
    appId: "1:822007052012:web:b841ee50b62fda851d17c9"
  };
  const db= firebase.initializeApp(firebaseConfig);

  export default db
 