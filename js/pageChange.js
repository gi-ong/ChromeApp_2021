const changePage = document.querySelector(".change-page-icon");
const pageWrap = document.querySelector(".flip-btn");

function rotatePage() {
  pageWrap.classList.toggle("rotate-page");
}

changePage.addEventListener("click", rotatePage);
