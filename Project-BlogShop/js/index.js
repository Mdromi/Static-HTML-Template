const openNav = document.querySelector(".open_btn");
const closeNav = document.querySelector(".close-btn");
const menu = document.querySelector(".nav_list");

const menuLeft = menu.getBoundingClientRect().left;
openNav.addEventListener("click", () => {
  if (menuLeft < 0) {
    menu.classList.add("show");
  }
});

closeNav.addEventListener("click", () => {
  if (menuLeft < 0) {
    menu.classList.remove("show");
  }
});