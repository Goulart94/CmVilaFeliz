
let navBar = document.getElementById('navBar');
let ancora = navBar.getElementsByTagName('a')

console.log(navBar);

for(let i = 0; i < ancora.length; i++){

    ancora[i].addEventListener("click", ()=>{
        var active = document.getElementsByClassName("active");
        console.log(active)
        active.className.remove(" active", "");
    }
    )}



