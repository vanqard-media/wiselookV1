// Load shared header
const headerFile = "header.html";
fetch(headerFile)
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("header").innerHTML = data;

    const burgerButton = document.querySelector(".burger");
    const mobileMenuList = document.querySelector(".main-nav ul");
    const header = document.querySelector(".site-header");

    if (burgerButton && mobileMenuList) {
      const closeMenu = () => {
        burgerButton.classList.remove("open");
        mobileMenuList.classList.remove("active");
      };

      // Toggle open/close
      burgerButton.addEventListener("click", (e) => {
        e.stopPropagation();
        burgerButton.classList.toggle("open");
        mobileMenuList.classList.toggle("active");
      });

      // Close on outside click
      document.addEventListener("click", (e) => {
        if (
          mobileMenuList.classList.contains("active") &&
          !mobileMenuList.contains(e.target) &&
          !burgerButton.contains(e.target)
        ) {
          closeMenu();
        }
      });

      // Close on scroll
      window.addEventListener("scroll", () => {
        if (mobileMenuList.classList.contains("active")) {
          closeMenu();
        }
        // Change header background when scrolled
        if (window.scrollY > 50) {
          header.classList.add("scrolled");
        } else {
          header.classList.remove("scrolled");
        }
      });
    }

    // Dropdown toggle support (if you add dropdowns later)
    const dropdownToggles = document.querySelectorAll(".dropdown-toggle");
    dropdownToggles.forEach((toggle) => {
      toggle.addEventListener("click", (e) => {
        e.preventDefault();
        const parentDropdown = toggle.closest(".dropdown");
        parentDropdown.classList.toggle("active");
      });
    });
  })
  .catch((error) => console.error("❌ Error loading header:", error));

// ===============================
// Load Shared Footer
// ===============================
const footerFile = "footer.html";
fetch(footerFile)
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("footer").innerHTML = data;
  })
  .catch((error) => console.error("❌ Error loading footer:", error));

// ===============================
// Load Shared Book a Demo
// ===============================
const demoFile = "demo.html";
fetch(demoFile)
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("demo").innerHTML = data;
  })
  .catch((error) => console.error("❌ Error loading demo:", error));