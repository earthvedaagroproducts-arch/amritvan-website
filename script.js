document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", function (e) {
      e.stopPropagation();
      mainNav.classList.toggle("active");

      const isOpen = mainNav.classList.contains("active");
      menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      menuToggle.innerHTML = isOpen ? "✕" : "☰";
    });

    document.addEventListener("click", function (e) {
      if (!mainNav.contains(e.target) && !menuToggle.contains(e.target)) {
        mainNav.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.innerHTML = "☰";
      }
    });

    const navLinks = mainNav.querySelectorAll("a");
    navLinks.forEach((link) => {
      link.addEventListener("click", function () {
        mainNav.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.innerHTML = "☰";
      });
    });
  }
});
