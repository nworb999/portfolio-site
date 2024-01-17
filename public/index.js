function setActiveLink() {
  var currentPath = window.location.pathname;
  var navLinks = document.querySelectorAll("nav a");

  // opens correct menu on page load
  navLinks.forEach(function (link) {
    if (link.getAttribute("href") === currentPath) {
      link.classList.add("active");
      link.className += " active";

      var panel = link.nextElementSibling;
      if (panel && panel.classList.contains("menu-secondary")) {
        panel.style.display = "block";
      }

      var parentPanel = link.closest(".menu-secondary");
      while (parentPanel) {
        parentPanel.style.display = "block";
        parentPanel = parentPanel.parentElement.closest(".menu-secondary");
      }
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  fetch("/components/burger.html")
    .then((response) => response.text())
    .then((text) => {
      const burgerHolder = document.getElementById("burger-placeholder");
      if (burgerHolder) {
        burgerHolder.innerHTML = text;
      }
    })
    .then(() => {
      const icons = document.querySelectorAll(".icon");
      if (icons) {
        icons.forEach((icon) => {
          icon.addEventListener("click", (event) => {
            icon.classList.toggle("open");
          });
        });
      }

      const burger = document.getElementById("burger-menu");
      if (burger) {
        burger.addEventListener("click", function (e) {
          var menu = document.getElementById("menu-items");
          menu.classList.toggle("menu-active");
        });
      }
    });

  fetch("/components/navigation.html")
    .then((response) => response.text())
    .then((text) => {
      const navHolder = document.getElementById("nav-placeholder");
      if (navHolder) {
        navHolder.innerHTML = text;
      }
      setActiveLink();
    })
    .then(() => {
      var acc = document.getElementsByClassName("menu-trigger");
      var i;

      // handle click menus open
      for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function (e) {
          var current = document.getElementsByClassName("active");
          if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");
          }
          this.className += " active";
          this.classList.toggle("active");
          var panel = this.nextElementSibling;
          if (panel.style.display === "block") {
            panel.style.display = "none";
          } else {
            panel.style.display = "block";
          }
        });
      }
    });
});
