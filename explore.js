// Menu Toggle + Blur + Icon Animation
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const pageContent = document.querySelector(".page-content");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");       // Show/hide nav
  pageContent.classList.toggle("blur");    // Blur/unblur background
  menuToggle.classList.toggle("active");   // Animate icon into X
});

// Scroll Reveal Animation
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal, .gallery-grid img, .gallery-title");
  const trigger = window.innerHeight * 0.9;

  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < trigger) {
      el.classList.add("show");
    }
  });
}

window.addEventListener("load", () => setTimeout(revealOnScroll, 300));
window.addEventListener("scroll", revealOnScroll);

// Dark Mode from Local Storage
if (localStorage.getItem("theme") === "dark") {
  document.getElementById("page").classList.add("dark-theme");
}
