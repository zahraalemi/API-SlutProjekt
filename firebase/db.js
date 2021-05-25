import firebase from 'firebase';

/* const firebaseConfig = {
    apiKey: "AIzaSyC19EFzLPf8ncq2ydpEDHlPZsNwqRjYUjw",
    authDomain: "webshopapi-8f487.firebaseapp.com",
    projectId: "webshopapi-8f487",
    storageBucket: "webshopapi-8f487.appspot.com",
    messagingSenderId: "822007052012",
    appId: "1:822007052012:web:b841ee50b62fda851d17c9"
  }; */
  const firebaseConfig = {
    apiKey: "AIzaSyA8D6sA2qquwCmIWD3CkyosWm9PsfLMI3Y",
    authDomain: "sinus-webshop-2d988.firebaseapp.com",
    projectId: "sinus-webshop-2d988",
    storageBucket: "sinus-webshop-2d988.appspot.com",
    messagingSenderId: "422822009975",
    appId: "1:422822009975:web:c98243366d81dffa6d3a72"
  };
  const db= firebase.initializeApp(firebaseConfig);

  export default db
 