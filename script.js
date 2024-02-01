function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const currentYear = new Date().getFullYear();
const yearSpan = document.getElementById("copyrightYear");
yearSpan.innerHTML = currentYear;
