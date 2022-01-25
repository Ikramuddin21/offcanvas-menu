const icon = document.querySelector('.menu-icon');
const navBar = document.querySelector('.nav-bar');
const closeBtn = document.querySelector('.close-btn');

icon.addEventListener('click', displayMenu);

function displayMenu () {
    toggleStyle('0', '-30%');
}
closeBtn.addEventListener('click', hideMenu);

function hideMenu () {
    toggleStyle('-30%', '0');
}
function toggleStyle (num1, num2) {
    navBar.style.left = num1;
    icon.style.left = num2;
}