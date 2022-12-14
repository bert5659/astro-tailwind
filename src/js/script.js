const toggleButton = document.getElementsByClassName("toggle-menu")[0];
const nav2 = document.getElementById("full_screen_nav");
const mainHeader = document.querySelector("header");
const logo = document.querySelector(".logo");
const html = document.querySelector("html");
const body = document.querySelector("body");
const divMail = document.getElementById("mail_check");
const divTel = document.getElementById("tel_check");
const minusButton = document.querySelector("#minus");
const plusButton = document.querySelector("#plus");
const numberElement = document.querySelector("#number");
const minusButtonShop = document.querySelector("#minusShop");
const plusButtonShop = document.querySelector("#plusShop");
const numberElementShop = document.querySelector("#numberShop");
const topButton = document.getElementById("top-button");
const filtermenu = document.getElementById("filtermenu");
const toggleButton2 = document.getElementById("toggle-filtermenu");
const modal = document.querySelector("#modal");
const closeModal = document.querySelector(".close-button");
const closeModal2 = document.querySelector(".close-button2");
const openModals = document.querySelectorAll(".open-button");
let number = 0;

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

  minusButton.addEventListener("click", () => {
    if (number === 0) {
      return;
    }
    number--;
    numberElement.textContent = number.toString();
  });

  plusButton.addEventListener("click", () => {
    number++;
    numberElement.textContent = number.toString();
  });
});

//Til topppen knap//
// Tilf??jer en EventListener til knappen
topButton.addEventListener("click", function () {
  // N??r knappen trykkes, skroll til toppen af siden
  window.scrollTo(0, 0);
});

// Mobil knap til kategori drop-down//
// Filternav

// Tilf??j en klik-lytter til togglebutton2
toggleButton2.addEventListener("click", function () {
  // N??r knappen trykkes, skift "collapsed" klassen p?? filtermenu
  filtermenu.querySelector("ul").classList.toggle("collapsed");
});

// Hent alle a-tags inde i filtermenu
const aTags = filtermenu.querySelectorAll("a");

// Tilf??j en klik-lytter til hver a-tag
aTags.forEach(function (aTag) {
  aTag.addEventListener("click", function () {
    // N??r a-tag'et trykkes, skift "collapsed" klassen p?? ul
    filtermenu.querySelector("ul").classList.toggle("collapsed");
  });
});

// Nav forsvinder og kategorier bliver sticky

// F??rst henter vi referencer til de to elementer, vi vil arbejde med
var stickyElement = document.getElementById("my-header");
var otherStickyElement = document.getElementById("filter");

// Derefter definerer vi en funktion, der tjekker om "otherStickyElement" har n??et toppen af visningsomr??det
function isOtherStickyElementAtTopOfViewport() {
  // Vi bruger getBoundingClientRect() metoden til at f?? den aktuelle position og st??rrelse af "otherStickyElement"
  var rect = otherStickyElement.getBoundingClientRect();

  // Vi tjekker om toppen af "otherStickyElement" er p?? eller ovenfor toppen af visningsomr??det
  return rect.top <= 0;
}

// Vi definerer en funktion, der g??r "stickyElement" sticky, indtil "otherStickyElement" bliver sticky
function makeStickyUntilOtherElementIsSticky() {
  // F??rst tjekker vi om "otherStickyElement" har n??et toppen af visningsomr??det
  if (isOtherStickyElementAtTopOfViewport()) {
    // Hvis "otherStickyElement" er i toppen af visningsomr??det, fjerner vi "sticky" klassen fra "stickyElement" og tilf??jer "visible" klassen til "top-button"
    stickyElement.classList.remove("nysticky");
    topButton.classList.add("visible");
  } else {
    // Hvis "otherStickyElement" ikke er i toppen af visningsomr??det, tilf??jer vi "sticky" klassen til "stickyElement" og fjerner "visible" klassen fra "top-button"
    stickyElement.classList.add("nysticky");
    topButton.classList.remove("visible");
  }
}

// Til sidst tilf??jer vi "makeStickyUntilOtherElementIsSticky" funktionen til vinduets "scroll" event
window.addEventListener("scroll", makeStickyUntilOtherElementIsSticky);

//Modal script
//Vi lytter p?? alle knapper med elementer med klassen .open-button
openModals.forEach((openModal) => {
  //Vi tilf??jer en EventListener og ved klik vises vores modal vindue
  openModal.addEventListener("click", () => {
    modal.showModal();
  });
});

//Vi lytter efter klik p?? knappen med klassen .close-button
closeModal.addEventListener("click", () => {
  //Ved klik lukkes modal vinduet
  modal.close();
});
//Vi lytter efter klik p?? knappen med klassen .close-button2
closeModal2.addEventListener("click", () => {
  //Ved klik lukkes modal vinduet
  modal.close();
});

minusButtonShop.addEventListener("click", () => {
  if (number === 0) {
    return;
  }
  number--;
  numberElementShop.textContent = number.toString();
});

plusButtonShop.addEventListener("click", () => {
  number++;
  numberElementShop.textContent = number.toString();
});
