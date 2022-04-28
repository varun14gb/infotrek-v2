//preloader
window.onload = function () {
    document.querySelector("#preloader").style.display = "none";
}

//countdown functioning
var eventDate = new Date(2022, 4, 27).getTime();
var days, hours, minutes, seconds;

getCountdown();

setInterval(function () {
    getCountdown();
}, 1000);

function getCountdown() {
    var currentDate = new Date().getTime();
    var secondsLeft = (eventDate - currentDate) / 1000;

    days = pad(parseInt(secondsLeft / 86400));
    secondsLeft = secondsLeft % 86400;

    hours = pad(parseInt(secondsLeft / 3600));
    secondsLeft = secondsLeft % 3600;

    minutes = pad(parseInt(secondsLeft / 60));
    seconds = pad(parseInt(secondsLeft % 60));

    document.querySelector("#days").childNodes[1].innerHTML = days;
    document.querySelector("#hours").childNodes[1].innerHTML = hours;
    document.querySelector("#minutes").childNodes[1].innerHTML = minutes;
    document.querySelector("#seconds").childNodes[1].innerHTML = seconds;
}

function pad(n) {
    return (n < 10 ? '0' : '') + n;
}

const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");

    burger.addEventListener("click", () => {
        nav.classList.toggle("nav-active");

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.2}s`;
            }
        });

        burger.classList.toggle("toggle");
    });
}

navSlide();