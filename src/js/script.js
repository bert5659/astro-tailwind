const toggleButton = document.getElementsByClassName("toggle-menu")[0];
const nav2 = document.getElementById("full_screen_nav");
const mainHeader = document.querySelector("header");

toggleButton.addEventListener("click", () => {
  console.log("menu clicked");
  nav2.classList.toggle("open");
});
