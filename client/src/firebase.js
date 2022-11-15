import * as firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
 
  apiKey: "AIzaSyB7UIQAyL94YLaceZHKpJb1Iw7HKMq4N94",
  authDomain: "duanbanhang.firebaseapp.com",
  databaseURL: "https://duanbanhang-default-rtdb.firebaseio.com",
  projectId: "duanbanhang",
  storageBucket: "duanbanhang.appspot.com",
  messagingSenderId: "343255832910",
  appId: "1:343255832910:web:aaf5507bbd89f1dac2a61f",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
