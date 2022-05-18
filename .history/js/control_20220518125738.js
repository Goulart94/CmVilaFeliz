const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('nav a').forEach(link=>{
    if(link.href.includes(`${activePage}`)){
        link.classList.add('active')
    }
});


const upScroll = document.getElementById("upScroll");


upScroll.addEventListener('click', function(event){
    event.preventDefault();
    console.log("true")
})