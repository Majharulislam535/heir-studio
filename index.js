
const sideNav = document.getElementById('sideNav');
const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');


menuBtn.onclick = function () {
    if (sideNav.style.right === "-250px") {
        sideNav.style.right = '0';
        menu.src = "./img/close.png"
    }
    else {
        sideNav.style.right = "-250px";
        menu.src = "./img/menu.png"
    }
}

