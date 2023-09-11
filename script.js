function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
function scrollToContact() {
  const contactSection = document.getElementById("contact");
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });
  }
} 

function scrollToExperience() {
  const contactSection = document.getElementById("experience");
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });
  }
}
function scrollToProjects() {
  const contactSection = document.getElementById("projects");
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });
  }
}