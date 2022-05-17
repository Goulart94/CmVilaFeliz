
let navBar = document.getElementById('navBar');
let ancora = navBar.getElementsByTagName('a')

console.log(navBar);


for (var i = 0; i < ancora.length; i++) {
   ancora[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    });
  }