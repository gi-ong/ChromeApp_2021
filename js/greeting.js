const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const helloUser = greeting.querySelector("h1");
const logOutBtn = greeting.querySelector(".clear-btn");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function blink() {
  helloUser.classList.toggle("active");
}
setInterval(blink, 500);

function onLoginSubmit(e) {
  e.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function logOutUser() {
  helloUser.innerText = "";
  loginInput.value = "";
  localStorage.clear();
  greeting.classList.add(HIDDEN_CLASSNAME);
  loginForm.classList.remove(HIDDEN_CLASSNAME);
}

function resetTyping() {
  helloUser.innerText = "";
  paintGreetings(savedUsername);
}

function paintGreetings(username) {
  let helloUserArr = `Hello, ${username}`.split("");
  greeting.classList.remove(HIDDEN_CLASSNAME);
  logOutBtn.classList.remove(HIDDEN_CLASSNAME);
  logOutBtn.addEventListener("click", logOutUser);
  function dynamic(arr) {
    if (arr.length > 0) {
      helloUser.innerText += arr.shift();
      setTimeout(function () {
        dynamic(arr);
      }, 100);
    } else {
      setTimeout(resetTyping, 3000);
    }
  }
  dynamic(helloUserArr);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
