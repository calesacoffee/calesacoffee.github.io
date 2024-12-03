document.getElementById('logo-cont').innerHTML = `
    <img src="logotrans.png" alt="" class="header-logo" style="mix-blend-mode: darken;">
`
window.addEventListener("scroll", function () {
    let header = document.getElementById("header-banner");
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    header.style.background = `rgba(255,255,255,${1 - Math.min(scrollTop / 500,0.2)})`


 });