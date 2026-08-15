// Import the functions you need from the SDKs you need
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
let gmail = document.querySelector(".email");
let password = document.querySelector(".password");
let button = document.querySelector(".bttn");
let waki = localStorage.getItem("yestrue");
if (waki) {
  console.log("you happy");
  document.querySelector(".timitimi").style.display = "none";
} else {
  button.addEventListener("click", async () => {
    console.log("button");
    let path = ref(db, "Account/Selected/");
    let daam = await get(path);
    if (daam.exists()) {
      daam.forEach((damm) => {
        let coke = damm.val();
        if (coke.email == gmail.value && coke.password == password.value) {
          document.querySelector(".timitimi").style.display = "none";
          localStorage.setItem("yestrue", "true");
          localStorage.setItem("YOURKEY", `${damm.key}`);
        } else {
          localStorage.removeItem('yestrue');
          document.querySelector(".haha").innerHTML =
            "Maybe You have not created an account yet or <br>Maybe You have not been confirmed by the creator!";
        }
      });
    } else {
      localStorage.removeItem('yestrue');
      document.querySelector(".haha").innerHTML =
        "Maybe You have not created an account yet or<br> Maybe You have not been confirmed by the creator yet!";
    }
  });
}
const pll = document.querySelector(".trending-contents");
async function getData() {
  let htmldata = "";
  let path = ref(db, "MovieApp/Trending");
  let snapshot = await get(path);
  if (snapshot.exists()) {
    snapshot.forEach((cs) => {
      let assign = cs.val();
      // console.log(cs.val());
      let google = "https://google.com";
      htmldata += `
      <div class="card" onclick="window.location.href='${assign.pageurl}'">
          <div class="card-img-cov"><img src="${assign.imageurl}" /></div>
          <div class="card-bottom">
            ${assign.title}<span>${assign.type} &middot; ${assign.release}</span>
            <div class="playbtn"></div>
          </div>
        </div>
      `;
    });
  } else {
    console.log("Didn't Got it!");
  }
  // console.log(htmldata);
  pll.innerHTML = htmldata;
}
getData();

function setback() {
  localStorage.setItem("path", "main");
  console.log(localStorage.getItem("path"));
}
setback();
console.log('here too');
// async function accept() {
//   let npc = true;
//   console.log("tt");
//   try {
//     let path = ref(db, "MovieApp/Accepted/");
//     let data = await get(path);
//     data.forEach((da) => {
//       if (da.val().name == JSON.parse(localStorage.getItem("data")).name) {
//         console.log("confirmed" + da.val().name);
//         npc = false;
//       } else {
//         window.location.href = "signuppg.html";
//       }
//     });
//     if (npc) {
//       window.location.href = "signuppg.html";
//     }
//   } catch (error) {
//     console.log("something wrong!");
//     window.location.href = "signuppg.html";
//   }
// }
// accept();
// let visits = JSON.parse(localStorage.getItem("visits")) || 0;
