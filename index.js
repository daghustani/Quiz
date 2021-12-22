 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-analytics.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyAcMKaM6Wp4mMxDCmhbuDSdPPl8s5ZlIiQ",
   authDomain: "quiz-seder-app.firebaseapp.com",
   projectId: "quiz-seder-app",
   storageBucket: "quiz-seder-app.appspot.com",
   messagingSenderId: "416967159044",
   appId: "1:416967159044:web:44219ba1ff69285c88f451",
   measurementId: "G-7WMP1DJZCW"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
 