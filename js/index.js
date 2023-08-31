

const changenavbar = ()=>{
    // const scrolling_navbar = document.querySelector("#scrolling-navbar");
    const scrolling_navbar = document.getElementById('scrolling_navbar');
var scrollvalue = window.scrollY;
console.log(scrollvalue);

if(   scrollvalue  > 1   ){
    scrolling_navbar.classList.add('scrolling-navbar-bgcolor');
}

else {
    scrolling_navbar.classList.remove('scrolling-navbar-bgcolor');
}
}
window.addEventListener('scroll', changenavbar);