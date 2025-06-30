// Header compartido
const headerFile = 'header.html';

fetch(headerFile)
  .then(response => response.text())
  .then(data => {
    document.getElementById('header').innerHTML = data;
    // Funcionalidad del menú hamburguesa
    const burgerButton = document.querySelector('.burger');
    const mobileMenuList = document.querySelector('.mobile-menu-list');
    
    if (burgerButton && mobileMenuList) {
      burgerButton.addEventListener('click', () => {
        burgerButton.classList.toggle('open'); // animate to X
        mobileMenuList.classList.toggle('active'); // show/hide menu
      });
    }

    // Funcionalidad del submenú "Eventos"
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    dropdownToggles.forEach(toggle => {
      toggle.addEventListener('click', (e) => {
        e.preventDefault(); // Evita la navegación inmediata
        const parentDropdown = toggle.closest('.dropdown');
        parentDropdown.classList.toggle('active'); // Alterna la visibilidad del submenú
      });
    });

    // 🛡️ Cierra el submenú al hacer clic fuera
    document.addEventListener('click', (event) => {
      dropdownToggles.forEach(toggle => {
        const parentDropdown = toggle.closest('.dropdown');
        if (!parentDropdown.contains(event.target) && !toggle.isSameNode(event.target)) {
          parentDropdown.classList.remove('active'); // Cierra el submenú si haces clic fuera
        }
      });
    });

    // Cambia la visibilidad del logo, estilo del header y cierra la hamburguesa con el scroll
    const logo = document.querySelector(".logo");
    const header = document.querySelector("header.menu-toggle");

    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        logo.classList.add("logo-visible");
        logo.classList.remove("hidden-logo");
        header.classList.add("scrolled");
      } else {
        logo.classList.remove("logo-visible");
        logo.classList.add("hidden-logo");
        header.classList.remove("scrolled");
      }

      // 🚀 NUEVO: Cierra el menú hamburguesa si está abierto al hacer scroll
      if (mobileMenuList && mobileMenuList.classList.contains('active')) {
        mobileMenuList.classList.remove('active');
      }
    });
  })
  .catch(error => console.error('Error al cargar el header:', error));
