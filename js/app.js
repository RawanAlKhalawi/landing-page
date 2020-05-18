/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */
const navl = document.getElementById("navbar__list");
const section = document.querySelectorAll("section");
/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
function buildNav() {
  for (let i of section) {
    let newSection = `<li class="menu__link ${i.className}"data-link==${i.id}><a href="#${i.id}">${i.dataset.nav}</li>`;

    navl.insertAdjacentHTML("beforeend", newSection);
  }
}

// Add class 'active' to section when near top of viewport
function active() {
  window.addEventListener("scroll", function() {
    for (let i of section) {
      const element = Math.floor(i.getBoundingClientRect().top);
      if (element < 100 && element >= -300) {
        i.classList.add("your-active-class");
        i.style.background = "blue";
      } else {
        i.classList.remove("your-active-class");
        i.style.background =
          "linear-gradient(0deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0) 100%)";
      }
    }
  });
}
// Scroll to anchor ID using scrollTO event
function scroll() {
  const navMenu = document.querySelectorAll(".navbar__menu");
  for (let nav of navMenu) {
    {
      nav.addEventListener("click", function() {
        for (i = 0; i < section; i++) {
          section[i].scrollIntoView({
            behavior: "smooth"
          });
        }
      });
    }
  }
}

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu
buildNav();
// Scroll to section on link click
scroll();
// Set sections as active
active();
