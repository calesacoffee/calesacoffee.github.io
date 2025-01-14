document.getElementById('logo-cont').innerHTML = `
    <img src="Calesa2025white.png" alt="" class="header-logo">
`
window.addEventListener("scroll", function () {
    let header = document.getElementById("header-banner");
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    header.style.background = `rgba(0,0,0,${1 - Math.min(scrollTop / 500,0.4)})`


 });