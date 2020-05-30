const firebase = require("firebase")
require("firebase/database")

var firebaseConfig = {
  apiKey: "AIzaSyCgEOWBv7WXdwdtY6RWC00T4qXQUYjrnag",
  authDomain: "funcky.firebaseapp.com",
  databaseURL: "https://funcky.firebaseio.com",
  projectId: "funcky",
  storageBucket: "funcky.appspot.com",
  messagingSenderId: "970379730199",
  appId: "1:970379730199:web:9b0730a99449e11722eb52",
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export default firebase
