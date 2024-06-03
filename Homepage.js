function logo_f() {
  var x = document.getElementById("logo");
  var y = document.getElementById("main");
  var z = document.querySelectorAll("#book");

  var targetElement = event.target; 
  if (x.style.display == "block") {
      x.style.display = "none";
      y.style.marginLeft = "5";
      z.forEach(function(element) {
          element.style.display = "block";
      });
  } 
  else {
      x.style.display = "block";
      y.style.marginLeft = "210";
      z.forEach(function(element) {
          element.style.display = "none";
      });
  }
}
var scrollPosition = window.scrollY;
console.log("Scroll position:", scrollPosition);
function drama() {
  window.scrollTo(0, 520);
}
function Roman() {
  window.scrollTo(0, 911);
}
