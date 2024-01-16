function setActiveLink() {
  var currentPath = window.location.pathname;
  var navLinks = document.querySelectorAll("nav a");

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
  fetch("/navigation.html")
    .then((response) => response.text())
    .then((text) => {
      document.getElementById("nav-placeholder").innerHTML = text;
      setActiveLink();
    })
    .then(() => {
      var acc = document.getElementsByClassName("menu-trigger");
      var i;

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

// document.addEventListener("DOMContentLoaded", function () {
//   var acc = document.getElementsByClassName("menu-trigger");
//   var i;

//   for (i = 0; i < acc.length; i++) {
//     acc[i].addEventListener("click", function (e) {
//       var current = document.getElementsByClassName("active");
//       current[0].className = current[0].className.replace(" active", "");
//       this.className += " active";
//       this.classList.toggle("active");
//       var panel = this.nextElementSibling;
//       if (panel.style.display === "block") {
//         panel.style.display = "none";
//       } else {
//         panel.style.display = "block";
//       }
//     });
//   }
// });
