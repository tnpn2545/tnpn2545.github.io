document.body.addEventListener('click', function(event) {
    var menuContent = document.getElementById("menuContent");
    var menuIcon = document.querySelector(".menu-icon");

    var isClickInsideMenu = menuContent.contains(event.target) || menuIcon.contains(event.target);

    if (!isClickInsideMenu) {
        menuContent.style.display = "none";
    }
});

function toggleMenu() {
    var menuContent = document.getElementById("menuContent");
    if (menuContent.style.display === "none" || menuContent.style.display === "") {
        menuContent.style.display = "block";
    } else {
        menuContent.style.display = "none";
    }
}
