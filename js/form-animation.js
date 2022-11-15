document.addEventListener('DOMContentLoaded', (event) => {
    setTimeout(() => {
    var blue = document.querySelector(".blue");
    var orange = document.querySelector(".orange");

    orange.style.left = "55%";
    orange.style.top = "45%";
    blue.style.left = "6%";
    blue.style.top = "6%";
    }, 500);
});