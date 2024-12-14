import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";

const firebaseConfig = {
    apiKey: "AIzaSyCW4opY-MpZ-kFlsGRG5o-Z9hokdB_k5iQ",
    authDomain: "team8wh-1eb80.firebaseapp.com",
    projectId: "team8wh-1eb80",
    storageBucket: "team8wh-1eb80.firebasestorage.app",
    messagingSenderId: "520173619973",
    appId: "1:520173619973:web:87db65508013be923f456c",
    measurementId: "G-97ZMZ3VBEX"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

document.getElementById('SignInButton').addEventListener('click', (event) => {
    event.preventDefault();         // 새로고침 방지용

    const email = document.getElementById('SignInEmail').value;
    const password = document.getElementById('SignInPassword').value;
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            alert(`환영합니다! "${user.email}"님!`)
            location.replace('./윤지수/윤지수_1page.html');
        })
        .catch((error) => {
            alert('오류입니다! 아이디 또는 비밀번호를 다시 확인해주세요!');
        });
});