import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import axios from "axios"
import firebase from "firebase/compat/app"
import "firebase/compat/auth"

//Vue.prototype.$axios = axios

const firebaseConfig = {
  apiKey: "AIzaSyDxYD1tOOHtrhTq5QkubyG_f8PH8F8Rn0Y",
  authDomain: "vue-auth-d709a.firebaseapp.com",
  projectId: "vue-auth-d709a",
  storageBucket: "vue-auth-d709a.appspot.com",
  messagingSenderId: "180147982515",
  appId: "1:180147982515:web:408de96bd17a4f5c15e0c6",
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()

auth.onAuthStateChanged((user) => {
  if (user) {
    // User is signed in
    console.log("User is signed in")
  } else {
    // User is signed out
    console.log("User is signed out")
  }
})

createApp(App).use(store).use(router).mount("#app")
