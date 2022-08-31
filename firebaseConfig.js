import { getApps, initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAvreGmIWh288W9vf3sdAufTfO4hQYGgPw",
    authDomain: "contentcrawer.firebaseapp.com",
    projectId: "contentcrawer",
    storageBucket: "contentcrawer.appspot.com",
    messagingSenderId: "131504774249",
    appId: "1:131504774249:web:555fc98e4dfd11bf6156f8"
};

if (!getApps.length) {
    initializeApp(firebaseConfig);
  }
  
  