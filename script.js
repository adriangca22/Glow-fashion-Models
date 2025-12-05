// Menú hamburguesa funcional
const hamburgerBtn = document.getElementById("hamburger-btn")
const mobileMenu = document.getElementById("mobile-menu")
const mobileLinks = document.querySelectorAll(".mobile-nav-links a, .mobile-cta")

// Toggle menú
if (hamburgerBtn && mobileMenu) {
  hamburgerBtn.addEventListener("click", function () {
    this.classList.toggle("active")
    mobileMenu.classList.toggle("active")
    document.body.classList.toggle("menu-open")
  })

  // Cerrar menú al hacer clic en un enlace
  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      hamburgerBtn.classList.remove("active")
      mobileMenu.classList.remove("active")
      document.body.classList.remove("menu-open")
    })
  })

  // Cerrar menú al hacer scroll
  window.addEventListener("scroll", () => {
    if (mobileMenu.classList.contains("active")) {
      hamburgerBtn.classList.remove("active")
      mobileMenu.classList.remove("active")
      document.body.classList.remove("menu-open")
    }
  })
}
