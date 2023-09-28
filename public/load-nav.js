function loadNav() {
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      // Insert HTML
      document.getElementById("nav-placeholder").innerHTML = this.responseText;

      // Add dynamic logic and event listeners
      attachMenuTriggers();
    }
  };
  xhttp.open("GET", "nav.html", true);
  xhttp.send();
}

function attachMenuTriggers() {
  var acc = document.getElementsByClassName("menu-trigger");
  var i;

  if (
    window.location.pathname === "/" ||
    window.location.pathname === "/index.html"
  ) {
    var defaultActiveMenu = document.getElementById("nav-about");

    if (defaultActiveMenu) {
      defaultActiveMenu.className += " active";
      defaultActiveMenu.classList.toggle("active");
    }
  }

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
}
