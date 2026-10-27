
const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector("#nav");

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const abierto = nav.classList.toggle("open");

    menuButton.setAttribute("aria-expanded", String(abierto));
    menuButton.textContent = abierto ? "Cerrar" : "Menú";
  });

  nav.querySelectorAll("a").forEach((enlace) => {
    enlace.addEventListener("click", () => {
      nav.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.textContent = "Menú";
    });
  });
}
