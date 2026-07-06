const mobileToggle = document.getElementById("mobileToggle");
const mainNav = document.getElementById("mainNav");

if (mobileToggle && mainNav) {
  mobileToggle.addEventListener("click", () => {
    mainNav.classList.toggle("show");
  });
}
