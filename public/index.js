document.addEventListener("DOMContentLoaded", function () {
  var acc = document.getElementsByClassName("menu-trigger");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function (e) {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
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
