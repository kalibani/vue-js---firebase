import Firebase from 'firebase'
let config = {
  apiKey: "AIzaSyApxx1IYvZmmV7TdtZUO7QU341YSqv5e4U",
  authDomain: "vuejs-firebase-01-3b3e7.firebaseapp.com",
  databaseURL: "https://vuejs-firebase-01-3b3e7.firebaseio.com",
  projectId: "vuejs-firebase-01-3b3e7",
  storageBucket: "vuejs-firebase-01-3b3e7.appspot.com",
  messagingSenderId: "122647057086"
};
let app = Firebase.initializeApp(config);
let db = app.database()

export default db
