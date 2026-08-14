const home = document.querySelector(".home");
const movies = document.querySelector(".movies");
const series = document.querySelector(".series");
const latest = document.querySelector(".latest");
const account = document.querySelector(".account");
function clepar() {
  home.style.textDecoration = "none";
  home.style.color = "rgba(255,255,255,0.5)";
  movies.style.textDecoration = "none";
  movies.style.color = "rgba(255,255,255,0.5)";
  series.style.textDecoration = "none";
  series.style.color = "rgba(255,255,255,0.5)";
  latest.style.textDecoration = "none";
  latest.style.color = "rgba(255,255,255,0.5)";
  account.style.textDecoration = "none";
  account.style.color = "rgba(255,255,255,0.5)";
}
function Home() {
  clepar();
  home.style.textDecoration = "underline";
  home.style.color = "white";
  home.style.textDecorationColor = "red";
}
Home();
function Movies() {
  clepar();
  movies.style.textDecoration = "underline";
  movies.style.color = "white";
  movies.style.textDecorationColor = "red";
  window.location.href = "movies.html";
}
function Series() {
  clepar();
  series.style.textDecoration = "underline";
  series.style.color = "white";
  series.style.textDecorationColor = "red";
  window.location.href = "series.html";
}
function Latest() {
  clepar();
  latest.style.textDecoration = "underline";
  latest.style.color = "white";
  latest.style.textDecorationColor = "red";
  window.location.href = "latest.html";
}
function Account() {
  clepar();
  account.style.textDecoration = "unterline";
  account.style.color = "white";
  account.style.textDecoration = "red";
  window.location.href = "account.html";
}
