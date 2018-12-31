window.onload = function () {
    var menuIcon = document.getElementById('menu');
    var leftNav = document.getElementById('navigation');

    menuIcon.addEventListener('click', function () {
        console.log('sprawdzenie czy wchodzi ');
        console.log(menuIcon);
        toggleVisible();

    });

    function toggleVisible() {
        leftNav.classList.toggle('show');
    }

}