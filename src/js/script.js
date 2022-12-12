const toggleButton = document.getElementsByClassName("toggle-menu")[0];
const nav2 = document.getElementById("full_screen_nav");
const mainHeader = document.querySelector("header");
const logo = document.querySelector(".logo");

toggleButton.addEventListener("click", () => {
  console.log("menu clicked");
  nav2.classList.toggle("open");
  hideLogo();
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
