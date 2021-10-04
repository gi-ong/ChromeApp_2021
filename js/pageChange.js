const changePage = document.querySelector(".change-page-icon");
const pageWrap = document.querySelector(".flip-btn");
const pageOne = pageWrap.querySelector(".page-one");
const pageTwo = pageWrap.querySelector(".page-two");

function rotatePage() {
  pageWrap.classList.toggle("rotate-page");
  if (pageWrap.classList.contains("rotate-page")) {
    pageTwo.style.opacity = "1";
    pageOne.style.opacity = "0.2";
  } else {
    pageOne.style.opacity = "1";
    pageTwo.style.opacity = "0.2";
  }
}

changePage.addEventListener("click", rotatePage);
