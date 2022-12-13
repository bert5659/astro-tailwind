const toggleButton = document.getElementsByClassName("toggle-menu")[0];
const nav2 = document.getElementById("full_screen_nav");
const mainHeader = document.querySelector("header");
const logo = document.querySelector(".logo");
const html = document.querySelector("html");
const body = document.querySelector("body");

toggleButton.addEventListener("click", () => {
  nav2.classList.toggle("open");
  toggleButton.classList.toggle("x");

  hideLogo();
  overflowThing();
});

window.addEventListener("resize", hideLogo);

function hideLogo() {
  if (
    nav2.classList.contains("open") ||
    window.matchMedia("(max-width: 600px)").matches
  ) {
    logo.style.display = "none";
  } else {
    logo.style.display = "block";
  }
}

function overflowThing() {
  if (nav2.classList.contains("open")) {
    html.style.overflowY = "hidden";
    body.style.overflowY = "hidden";
  } else {
    html.style.overflowY = "auto";
    body.style.overflowY = "auto";
  }
}
