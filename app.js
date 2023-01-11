let counter = document.querySelectorAll(".unread").length;

document.querySelector(".counter").innerHTML = counter;

const messages = document.querySelectorAll(".message");

messages.forEach(function (msg) {
    msg.addEventListener("click", () => {
        msg.classList.remove("unread");
        counter = document.querySelectorAll(".unread").length;
        document.querySelector(".counter").innerHTML = counter;
    })
})

const readAll = document.querySelector(".read");

readAll.addEventListener("click", () => {
    messages.forEach(function (msg) {
        msg.classList.remove("unread");
        counter = document.querySelectorAll(".unread").length;
        document.querySelector(".counter").innerHTML = counter;
    })
})
