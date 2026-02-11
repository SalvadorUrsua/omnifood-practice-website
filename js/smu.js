const currentYear = new Date().getFullYear();
year = document.querySelector(".year");
year.textContent = currentYear;

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
btnNavEl.addEventListener("click", () => {
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
      const btns = document.querySelectorAll("a");
      btns.forEach((btn) => {
        btn.addEventListener("click", () => {
          btn.blur();
        });
      });
    }
  });
});

const sectionHeroEl = document.querySelector(".section-hero");
const mobileBtn = document.querySelectorAll(".btn-mobile-nav");
const mobileDisplay = window.getComputedStyle(mobileBtn[0]).display;
function getOptions() {
  if (mobileDisplay === "block") {
    // MOBILE
    return { root: null, threshold: 0, rootMargin: "-80px" }; //, rootMargin: "0px 0px -300px 0px"
  } else {
    // LARGE SCREEN
    return { root: null, threshold: 0 };
  }
}

const obs = new IntersectionObserver(function (entries) {
  const ent = entries[0];
  const mainNav = document.querySelector("body");
  if (!ent.isIntersecting) {
    document.body.classList.add("sticky");
  } else {
    document.body.classList.remove("sticky");
  }
}, getOptions());

obs.observe(sectionHeroEl);

// const obs = new IntersectionObserver(function observerFunction(entries) {
//   const ent = entries[0];
//   console.log(ent.isIntersecting);
// }, opts);
// obs.observe(sectionHeroEl);
// const options = {
//   root: null, // to observe the element in the viewport / screen / browser window
//   threshold: 0, // when the element is already outside the screen / viewport / browser
// };
// if (mobileDisplay === "block") {
//   document.querySelector(".section-hero").classList.add("observer-sm");
// } else {
//   document.querySelector(".section-hero").classList.add("observer");
// }

// document.querySelector(".section-hero").classList.remove("observer-sm");
