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

var reg = document.querySelector(".reg");
var log = document.querySelector(".log");
var set = document.querySelector(".set");

function moveToCenter(option){
    switch (option) {
        case 'reg':
            reg.classList.add('active')
            log.classList.remove('active')
            set.classList.remove('active')
            break;
        case 'log':
            log.classList.add('active')
            reg.classList.remove('active')
            set.classList.remove('active')
            break;
        case 'set':
            set.classList.add('active')
            log.classList.remove('active')
            reg.classList.remove('active')
            break;
        default:
            break;
    }
}