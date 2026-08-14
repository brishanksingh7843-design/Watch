// Import the functions you need from the SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-analytics.js";
import {
  getDatabase,
  ref,
  onValue,
  set,
  get,
  update,
} from "https://www.gstatic.com/firebasejs/12.17.1/firebase-database.js";

// Your web app's Firebase configuration
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
  const path = ref(db, "MovieApp/Movie/");
  const container = document.querySelector(".movi-contents");

  // Listen for changes in real-time
  onValue(path, (snapshot) => {
    let chunk = "";

    if (snapshot.exists()) {
      const movies = snapshot.val();

      // Loop through each movie entry in the node
      Object.values(movies).forEach((data) => {
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
      chunk = "<p>No movies found.</p>";
    }

    // Update the DOM inside the listener callback
    container.innerHTML = chunk;
  });
}
gettingdata();
// Call the function
function setback() {
  localStorage.setItem("path", "movies");
  console.log(localStorage.getItem("path"));
}
setback();
