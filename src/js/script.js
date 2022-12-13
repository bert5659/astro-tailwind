const toggleButton = document.getElementsByClassName("toggle-menu")[0];
const nav2 = document.getElementById("full_screen_nav");
const mainHeader = document.querySelector("header");
const logo = document.querySelector(".logo");

// Add a click event listener to the toggle button
toggleButton.addEventListener("click", () => {
  // Toggle the "open" class on the navigation menu
  nav2.classList.toggle("open");

  // Toggle the "x" class on the toggle button to animate the transformation
  toggleButton.classList.toggle("x");

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
