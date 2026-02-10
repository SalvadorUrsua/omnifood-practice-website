const btrNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
btrNavEl.addEventListener("click", () => {
  // const result = document.querySelector(".header.nav-open");
  // if (result) {
  //   headerEl.classList.remove("nav-open");
  // } else {
  //   headerEl.classList.add("nav-open");
  // }

  headerEl.classList.toggle("nav-open");
});

const currentYear = new Date().getFullYear();
year = document.querySelector(".year");
year.textContent = currentYear;
