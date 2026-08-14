// Import the functions you need from the SDKs you need
// console.log("latest");
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-analytics.js";
import {
  getDatabase,
  set,
  get,
  ref,
  update,
  remove,
  onValue,
} from "https://www.gstatic.com/firebasejs/12.17.1/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8rjh6NKrg4Yx3hRLvY9IoUFlKIpbl9vQ",
  authDomain: "myhomepage-a903f.firebaseapp.com",
  databaseURL:
    "https://myhomepage-a903f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "myhomepage-a903f",
  storageBucket: "myhomepage-a903f.firebasestorage.app",
  messagingSenderId: "147182994829",
  appId: "1:147182994829:web:ed1ab09feb736c7683a9c4",
  measurementId: "G-5KDSSM53B9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(
  app,
  "https://myhomepage-a903f-default-rtdb.asia-southeast1.firebasedatabase.app/",
);
function gettingdata() {
  const path = ref(db, "MovieApp/Latest/");
  const container = document.querySelector(".late-contents");
  onValue(path, (snapshot) => {
    let chunk = "";
    if (snapshot.exists()) {
      const series = snapshot.val();
      Object.values(series).forEach((data) => {
        chunk += `
          <div class="card" onclick="window.location.href='${data.pageurl}'">
            <div class="card-img-cov"><img src="${data.imageurl}" alt="${data.title || "Movie"}" /></div>
            <div class="card-bottom">
              ${data.title} <span>${data.type} &middot; ${data.release}</span>
              <div class="playbtn"></div>
            </div>
          </div>
        `;
      });
    } else {
      chunk = "<p>No series found.</p>";
    }
    container.innerHTML = chunk;
  });
}
gettingdata();

function setback() {
  localStorage.setItem("path", "latest");
  console.log(localStorage.getItem("path"));
}
setback();
