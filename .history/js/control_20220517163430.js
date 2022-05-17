
let navBar = document.getElementById('navBar');
let ancora = navBar.getElementsByTagName('a')

console.log(navBar);



ancora.forEach(button => {
    button.addEventListener('click', function () {
        ancora.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');        
    });
});