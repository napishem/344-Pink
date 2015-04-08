var link = document.querySelector(".main-nav__toggler");
var menu = document.querySelector(".main-nav__list");
link.addEventListener("click", function(event) {
event.preventDefault();
menu.classList.toggle("main-nav__list--active");
})
