// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCW4opY-MpZ-kFlsGRG5o-Z9hokdB_k5iQ",
    authDomain: "team8wh-1eb80.firebaseapp.com",
    projectId: "team8wh-1eb80",
    storageBucket: "team8wh-1eb80.firebasestorage.app",
    messagingSenderId: "520173619973",
    appId: "1:520173619973:web:87db65508013be923f456c",
    measurementId: "G-97ZMZ3VBEX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

document.getElementById('SignUpButton').addEventListener('click', (event) => {
    event.preventDefault();         // 새로고침 방지용

    const email = document.getElementById('SignUpEmail').value;
    const password = document.getElementById('SignUpPassword').value;
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            location.replace('../김동영_index.html');        // 로그인 페이지 이동
        })
        .catch((error) => {
            alert('오류입니다! 이메일 또는 비밀번호를 다시 확인해주세요! 비밀번호는 6자리 이상입니다.');
        });
});