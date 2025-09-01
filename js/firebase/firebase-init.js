import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";


//내꺼-본인껄로 반드시 반드시 꼭 꼭 바꾸세요
const firebaseConfig = {
  apiKey: "AIzaSyAV23PtMKEEU4zPjL9UFSI-N7ktl_FSIgU",
  authDomain: "auth-demo-613dc.firebaseapp.com",
  projectId: "auth-demo-613dc",
  storageBucket: "auth-demo-613dc.firebasestorage.app",
  messagingSenderId: "789861619683",
  appId: "1:789861619683:web:cee8b32a43c8a9556c32d6"
};

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app)

  export {app, auth}