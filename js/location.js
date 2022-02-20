var opacity0 = 0;
var opacity1 = 0;
var intervalID = 0;

function fadeOut() {
    intervalID = setInterval(hide, 20);
}

function fadeIn() {
    intervalID = setInterval(show, 20);
}

function show() {

    var iframe = document.getElementById("content-iframe-on");
    var contact = document.getElementById("all-content");
    var btnAdd = document.getElementById("btnAdd");
    var btnStop = document.getElementById("btnStop");

    opacity0 = Number(window.getComputedStyle(iframe).getPropertyValue("opacity"));
    opacity1 = Number(window.getComputedStyle(contact).getPropertyValue("opacity"));


    if (opacity0 < 1) {
        opacity0 = opacity0 + 0.1;
        opacity1 = opacity1 - 0.1;

        iframe.style.opacity = opacity0;
        contact.style.opacity = opacity1;
        document.getElementById("content-iframe-on").style.zIndex = "1";

        console.log(opacity0);

    } else {
        clearInterval(intervalID);
    }
}

function hide() {
    var iframe = document.getElementById("content-iframe-on");
    var contact = document.getElementById("all-content");

    opacity0 = Number(window.getComputedStyle(iframe).getPropertyValue("opacity"));
    opacity1 = Number(window.getComputedStyle(contact).getPropertyValue("opacity"));


    if (opacity0 > 0) {

        opacity0 = opacity0 - 0.1;
        opacity1 = opacity1 + 0.1;

        iframe.style.opacity = opacity0;
        contact.style.opacity = opacity1;

        document.getElementById("content-iframe-on").style.zIndex = "0";
        console.log(opacity);

    } else {
        clearInterval(intervalID);
    }
}
