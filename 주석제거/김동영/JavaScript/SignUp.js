import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";

const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

document.getElementById('SignUpButton').addEventListener('click', (event) => {
    event.preventDefault();    

    const email = document.getElementById('SignUpEmail').value;
    const password = document.getElementById('SignUpPassword').value;
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            location.replace('../김동영_index.html'); 
        })
        .catch((error) => {
            alert('오류입니다! 이메일 또는 비밀번호를 다시 확인해주세요! 비밀번호는 6자리 이상입니다.');
        });
});