function menuAnimation() {

    var menu = document.querySelector(".mt");
    var full = document.querySelector("#full-scr");
    var navimg = document.querySelector("nav h3");
    var flag = 0;
    menu.addEventListener("click", function () {
        if (flag == 0) {
            full.style.top = 0;
            navimg.style.opacity = 0;
            flag = 1
        } else {
            full.style.top = "-100%";
            navimg.style.opacity = 1;
            flag = 0;
        };
    });
}
// var swiper = new Swiper(".mySwiper", {
//     pagination: {
//         el: ".swiper-pagination",
//         type: "progressbar",
//     },
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
// });
var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
    },
});



menuAnimation()