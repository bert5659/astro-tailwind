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
const minusButton5 = document.querySelector("#minus5");
const plusButton5 = document.querySelector("#plus5");
const numberElement5 = document.querySelector("#number5");
const minusButton2 = document.querySelector("#minus2");
const plusButton2 = document.querySelector("#plus2");
const numberElement2 = document.querySelector("#number2");
const minusButton3 = document.querySelector("#minus3");
const plusButton3 = document.querySelector("#plus3");
const numberElement3 = document.querySelector("#number3");
const minusButton4 = document.querySelector("#minus4");
const plusButton4 = document.querySelector("#plus4");
const numberElement4 = document.querySelector("#number4");
const topButton = document.getElementById("top-button");
const filtermenu = document.getElementById("filtermenu");
const toggleButton2 = document.getElementById("toggle-filtermenu");
const aTags = filtermenu.querySelectorAll("a");
const stickyElement = document.getElementById("my-header");
const otherStickyElement = document.getElementById("filter");
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
// Tilføjer en EventListener til knappen
topButton.addEventListener("click", function () {
  // Når knappen trykkes, skroll til toppen af siden
  window.scrollTo(0, 0);
});

// Mobil knap til kategori drop-down//

// Tilføj en EventListener til togglebutton2
toggleButton2.addEventListener("click", function () {
  // Når knappen trykkes, toggle "collapsed" klassen på filtermenu
  filtermenu.querySelector("ul").classList.toggle("collapsed");
});

// Hent alle a-tags inde i filtermenu

// Tilføj en EventListener til hvert a-tag
aTags.forEach(function (aTag) {
  aTag.addEventListener("click", function () {
    // Når a-tag'et trykkes, toggle "collapsed" klassen på ul
    filtermenu.querySelector("ul").classList.toggle("collapsed");
  });
});

// Nav forsvinder og kategorier bliver sticky//
// Vi definerer en funktion, der tjekker om "otherStickyElement" har nået toppen af visningsområdet
function isOtherStickyElementAtTopOfViewport() {
  // Vi bruger getBoundingClientRect() metoden til at få den aktuelle position og størrelse af "otherStickyElement"
  var rect = otherStickyElement.getBoundingClientRect();
  // Vi tjekker om toppen af "otherStickyElement" er ved toppen af visningsområdet
  return rect.top <= 0;
}

// Vi definerer en funktion, der gør "stickyElement" sticky, indtil "otherStickyElement" bliver sticky
function makeStickyUntilOtherElementIsSticky() {
  // Først tjekker vi om "otherStickyElement" har nået toppen af visningsområdet
  if (isOtherStickyElementAtTopOfViewport()) {
    // Hvis "otherStickyElement" er i toppen af visningsområdet, fjerner vi "sticky" klassen fra "stickyElement" og tilføjer "visible" klassen til "top-button"
    stickyElement.classList.remove("nysticky");
    topButton.classList.add("visible");
  } else {
    // Hvis "otherStickyElement" ikke er i toppen af visningsområdet, tilføjer vi "sticky" klassen til "stickyElement" og fjerner "visible" klassen fra "top-button"
    stickyElement.classList.add("nysticky");
    topButton.classList.remove("visible");
  }
}

// Til sidst tilføjer vi "makeStickyUntilOtherElementIsSticky" funktionen til vinduets "scroll" event
window.addEventListener("scroll", makeStickyUntilOtherElementIsSticky);

//Modal script

openModals.forEach((openModal) => {
  //Vi lytter efter klik på alle knapper med klassen .open-button
  openModal.addEventListener("click", () => {
    //Ved klik vises vores modal vindue
    modal.showModal();
  });
});
//Vi lytter efter klik på knappen med klassen .close-button i modal vinduet
closeModal.addEventListener("click", () => {
  modal.close();
});
//Vi lytter efter klik på svg'en i øverste venstre hjørne med klassen .close-button2 i modal vinduet
closeModal2.addEventListener("click", () => {
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

minusButton5.addEventListener("click", () => {
  if (number === 0) {
    return;
  }
  number--;
  numberElement5.textContent = number.toString();
});

plusButton5.addEventListener("click", () => {
  number++;
  numberElement5.textContent = number.toString();
});
minusButton2.addEventListener("click", () => {
  if (number === 0) {
    return;
  }
  number--;
  numberElement2.textContent = number.toString();
});

plusButton2.addEventListener("click", () => {
  number++;
  numberElement2.textContent = number.toString();
});
minusButton3.addEventListener("click", () => {
  if (number === 0) {
    return;
  }
  number--;
  numberElement3.textContent = number.toString();
});

plusButton3.addEventListener("click", () => {
  number++;
  numberElement3.textContent = number.toString();
});
minusButton4.addEventListener("click", () => {
  if (number === 0) {
    return;
  }
  number--;
  numberElement4.textContent = number.toString();
});

plusButton4.addEventListener("click", () => {
  number++;
  numberElement4.textContent = number.toString();
});
