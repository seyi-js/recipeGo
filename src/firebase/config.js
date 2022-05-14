import firebase from "react-native-firebase";
// import firebase from "firebase/auth";
// import "@firebase/auth";
// import "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAVvBQZofUqTdIJ6U_1F-EKWCuNAxNbhlA",
  authDomain: "testing-b1234.firebaseapp.com",
  databaseURL: "https://recipe-app-5981e.firebaseio.com",
  projectId: "recipe-app-5981e",
  storageBucket: "recipe-app-5981e.appspot.com",
  messagingSenderId: "12345-insert-yourse",
  appId: "1:165192742795:android:eaeca30eecb30cd1b3e18e",
};

const config = {
  name: "SECONDARY_APP",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig, "SECONDARY_APP");
}

// firebase.app().auth();

let DARK_MODE = false;
const MODE = DARK_MODE ? "#18191a" : "#fff";
export { firebase, DARK_MODE, MODE };
