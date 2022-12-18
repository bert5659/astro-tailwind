const toggleButton = document.getElementsByClassName("toggle-menu")[0];
const nav2 = document.getElementById("full_screen_nav");
const mainHeader = document.querySelector("header");
const logo = document.querySelector(".logo");
const html = document.querySelector("html");
const body = document.querySelector("body");
const divMail = document.getElementById("mail_check");
const divTel = document.getElementById("tel_check");
const modal = document.querySelector("#modal");
const openModal = document.querySelector(".open-button");
const closeModal = document.querySelector(".close-button");

window.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");
  hideLogo();

  window.addEventListener("resize", hideLogo);

  toggleButton.addEventListener("click", () => {
    nav2.classList.toggle("open");
    toggleButton.classList.toggle("x");

    hideLogo();
    overflowThing();
  });

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
});

//Til topppen knap//

// Get a reference to the button
const topButton = document.getElementById("top-button");

// Add a click event listener to the button
topButton.addEventListener("click", function () {
  // When the button is clicked, scroll to the top of the page
  window.scrollTo(0, 0);
});

//Mobil knap til kategori drop-down//

// Filternav
const filtermenu = document.getElementById("filtermenu");
const toggleButton2 = document.getElementById("toggle-filtermenu");

// Add a click event listener to the togglebutton2
toggleButton2.addEventListener("click", function () {
  // When the button is clicked, toggle the "collapsed" class on the filtermenu
  filtermenu.querySelector("ul").classList.toggle("collapsed");
});

// Get all the a tags inside the filtermenu
const aTags = filtermenu.querySelectorAll("a");

// Add a click event listener to each a tag
aTags.forEach(function (aTag) {
  aTag.addEventListener("click", function () {
    // When the a tag is clicked, toggle the "collapsed" class on the ul
    filtermenu.querySelector("ul").classList.toggle("collapsed");
  });
});

//Nav forsvinder og kategorier bliver sticky//

// First, we get references to the two elements that we want to work with
var stickyElement = document.getElementById("my-header");
var otherStickyElement = document.getElementById("filter");

// Next, we define a function that will check if the "otherStickyElement" has reached the top of the viewport
function isOtherStickyElementAtTopOfViewport() {
  // We use the getBoundingClientRect() method to get the current position and size of the "otherStickyElement"
  var rect = otherStickyElement.getBoundingClientRect();

  // We check if the top of the "otherStickyElement" is at or above the top of the viewport
  return rect.top <= 0;
}

// We define a function that will make the "stickyElement" sticky until the "otherStickyElement" becomes sticky
function makeStickyUntilOtherElementIsSticky() {
  // First, we check if the "otherStickyElement" has reached the top of the viewport
  if (isOtherStickyElementAtTopOfViewport()) {
    // If the "otherStickyElement" is at the top of the viewport, we remove the "sticky" class from the "stickyElement" and add the "visible" class to the "top-button"
    stickyElement.classList.remove("nysticky");
    topButton.classList.add("visible");
  } else {
    // If the "otherStickyElement" is not at the top of the viewport, we add the "sticky" class to the "stickyElement" and remove the "visible" class from the "top-button"
    stickyElement.classList.add("nysticky");
    topButton.classList.remove("visible");
  }
}

// Finally, we attach the "makeStickyUntilOtherElementIsSticky" function to the window's "scroll" event
window.addEventListener("scroll", makeStickyUntilOtherElementIsSticky);

//Modal script
openModal.addEventListener("click", () => {
  modal.showModal();
});
closeModal.addEventListener("click", () => {
  modal.close();
});
