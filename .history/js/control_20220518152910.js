const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('nav a').forEach(link => {
    if (link.href.includes(`${activePage}`)) {
        link.classList.add('active')
    }
});


const upScroll = document.getElementById("upScroll");


function scrollTo(element) {
    document.getElementById(element).scrollIntoView({
        behavior: "smooth"
    });
}

upScroll.addEventListener('click', function (event) {
    event.preventDefault();
    scrollTo("header")
    console.log("true")
});