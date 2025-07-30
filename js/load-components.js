// js/load-components.js
document.addEventListener("DOMContentLoaded", function () {
    // Load header
    fetch("components/header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header-placeholder").innerHTML = data;
        });

    // Slide Show
    fetch("components/slideshow.html")
        .then(res => res.text())
        .then(data => document.getElementById("slideshow-placeholder").innerHTML = data);

    // Load dịch vụ chính
    fetch("components/dichvuchinh.html")
        .then(res => res.text())
        .then(data => document.getElementById("dichvuchinh-placeholder").innerHTML = data);

    // Load gioi thieu
    fetch("components/gioithieu.html")
        .then(res => res.text())
        .then(data => document.getElementById("gioithieu-placeholder").innerHTML = data);

    // Load Pickleball
    fetch("components/pickleball.html")
        .then(res => res.text())
        .then(data => document.getElementById("pickleball-placeholder").innerHTML = data);

    // Load Menu coffee
    fetch("components/menucoffee.html")
        .then(res => res.text())
        .then(data => document.getElementById("menucoffee-placeholder").innerHTML = data);

    // Load Ho boi
    fetch("components/hoboi.html")
        .then(res => res.text())
        .then(data => document.getElementById("hoboi-placeholder").innerHTML = data);

    // Load Phu kien
    fetch("components/phukien.html")
        .then(res => res.text())
        .then(data => document.getElementById("phukien-placeholder").innerHTML = data);

    // Load Dich vu khac
    fetch("components/dichvukhac.html")
        .then(res => res.text())
        .then(data => document.getElementById("dichvukhac-placeholder").innerHTML = data);

    // Load Album
    fetch("components/album.html")
        .then(res => res.text())
        .then(data => document.getElementById("album-placeholder").innerHTML = data);

    // Load Tin tuc
    fetch("components/tintuc.html")
        .then(res => res.text())
        .then(data => document.getElementById("tintuc-placeholder").innerHTML = data);

    // Load Footer
    fetch("components/footer.html")
        .then(res => res.text())
        .then(data => document.getElementById("footer-placeholder").innerHTML = data);
});
