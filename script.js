let menuBar = document.querySelector(".menu-bar");
menuBar.onclick = function () {
  let navBar = document.querySelector(".nav-bar");
  navBar.classList.toggle("active");
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

const backToTopButton = document.querySelector(".back-to-top-btn");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 200) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
});
