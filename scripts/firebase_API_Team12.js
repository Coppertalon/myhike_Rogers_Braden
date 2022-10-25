var firebaseConfig = {
    apiKey: "AIzaSyAqzKTLFNY_9uZ48aFKvz9eDJOvCCjcReE",
    authDomain: "comp1800-project-rogers-braden.firebaseapp.com",
    projectId: "comp1800-project-rogers-braden",
    storageBucket: "comp1800-project-rogers-braden.appspot.com",
    messagingSenderId: "655715934021",
    appId: "1:655715934021:web:52046bf1749a34c4a5a82c"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();