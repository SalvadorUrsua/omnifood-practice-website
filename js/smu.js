function navClicked() {
  const result = document.querySelectorAll(".nav-open");
  if (result.length > 0) {
    result[0].classList.remove("nav-open");
  } else {
    document.querySelectorAll(".header")[0].classList.add("nav-open");
  }
}
