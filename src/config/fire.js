import firebase from "firebase";

const config = {
  apiKey: "AIzaSyACEZTqbTX5gxj5Lxbx8By7BgIRLx-kJ8c",
  authDomain: "todo-app-0310.firebaseapp.com",
  databaseURL: "https://todo-app-0310.firebaseio.com",
  projectId: "todo-app-0310",
  storageBucket: "todo-app-0310.appspot.com",
  messagingSenderId: "482867046144",
  appId: "1:482867046144:web:40dc174f9d9249760935e5",
  measurementId: "G-GP8P1SWBEK"
};

const fire = firebase.initializeApp(config);
export default fire;
