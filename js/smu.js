const currentYear = new Date().getFullYear();
year = document.querySelector(".year");
year.textContent = currentYear;

const btrNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
btrNavEl.addEventListener("click", () => {
  headerEl.classList.toggle("nav-open");
});

const anchorLinks = document.querySelectorAll("a:link");
anchorLinks.forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    const href = link.getAttribute("href");

    // scroll back to the top
    if (link.classList.contains("main-nav-link")) {
      headerEl.classList.toggle("nav-open");
    }

    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
  });
});
