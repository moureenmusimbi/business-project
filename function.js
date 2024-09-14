window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    if (header) {
        header.classList.toggle('sticky', window.scrollY > 0);
    }
});

var menu = document.querySelector('.menu');
var menuBtn = document.querySelector('.menu-btn');
var closeBtn = document.querySelector('.close-btn');

if (menu && menuBtn && closeBtn) {
    menuBtn.addEventListener("click", () => {
        menu.classList.add('active'); // Show the menu
    });

    closeBtn.addEventListener("click", () => {
        menu.classList.remove('active'); // Hide the menu
    });
}