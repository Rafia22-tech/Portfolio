// ===========================
// AOS Animation
// ===========================
AOS.init({
  duration: 1000,
  once: true,
});

// ===========================
// Mobile Menu
// ===========================
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  mobileMenu.classList.toggle("flex");
});

// ===========================
// Navbar Shadow
// ===========================
const navbar = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("shadow-lg");
  } else {
    navbar.classList.remove("shadow-lg");
  }
});

// ===========================
// Contact Form
// ===========================
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  alert("Message Sent Successfully!");

  form.reset();
});

// ===========================
// Typing Effect
// ===========================
const typingTexts = [
  "Computer Software Engineering Student",
  "Frontend Developer",
  "Web Designer",
  "JavaScript Developer"
];

const typingElement = document.querySelector(".typing");

if (typingElement) {

  let textIndex = 0;
  let charIndex = 0;

  function type() {

    if (charIndex < typingTexts[textIndex].length) {

      typingElement.textContent += typingTexts[textIndex].charAt(charIndex);

      charIndex++;

      setTimeout(type, 100);

    } else {

      setTimeout(erase, 1500);

    }

  }

  function erase() {

    if (charIndex > 0) {

      typingElement.textContent =
        typingTexts[textIndex].substring(0, charIndex - 1);

      charIndex--;

      setTimeout(erase, 50);

    } else {

      textIndex++;

      if (textIndex >= typingTexts.length) {

        textIndex = 0;

      }

      setTimeout(type, 400);

    }

  }

  type();

}

// ===========================
// Day / Night Mode
// ===========================
const themeToggle = document.getElementById("themeToggle");

// Load Saved Theme
if (localStorage.getItem("theme") === "dark") {

  document.body.classList.add("dark");

  themeToggle.innerHTML = "☀️";

} else {

  themeToggle.innerHTML = "🌙";

}

// Toggle Theme
themeToggle.addEventListener("click", () => {

  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {

    themeToggle.innerHTML = "☀️";

    localStorage.setItem("theme", "dark");

  } else {

    themeToggle.innerHTML = "🌙";

    localStorage.setItem("theme", "light");

  }

});