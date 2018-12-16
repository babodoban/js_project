// const title = document.querySelector("#title");

const baseColor = "white";
const secondColor = "black";
const thirdColor = "yellow";
const forthColor = "blue";

function handleClick() {
    const currentColor = title.style.color;
    if (currentColor === baseColor) {
        title.style.color = secondColor; 
    } else {
        title.style.color = baseColor;
    }
}

function handleDoubleClick() {
    const currentColor = title.style.color;
    if (currentColor === baseColor) {
        title.style.color = forthColor; 
    } else {
        title.style.color = baseColor;
    }
}

function handleMouseEnter() {
    const currentColor = title.style.color;
    if (currentColor === baseColor) {
        title.style.color = thirdColor;
    } else if (currentColor === secondColor) {
        title.style.color = forthColor;
    } else {
        title.style.color = baseColor;
    }
}

function network() {
    if (network = true) {
        console.log("It is online.");
    } else {
        console.log("It is offline.");
    }
}

function init() {
    title.style.color = baseColor;
    title.addEventListener("click", handleClick);
    title.addEventListener("dblclick", handleDoubleClick);
    title.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("online", network);
}

init();
