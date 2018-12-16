// const title = document.querySelector("#title");

// const baseColor = "white";
// const secondColor = "black";
// const thirdColor = "yellow";
// const forthColor = "blue";

// function handleClick() {
//     const currentColor = title.style.color;
//     if (currentColor === baseColor) {
//         title.style.color = secondColor; 
//     } else {
//         title.style.color = baseColor;
//     }
// }

// function handleDoubleClick() {
//     const currentColor = title.style.color;
//     if (currentColor === baseColor) {
//         title.style.color = forthColor; 
//     } else {
//         title.style.color = baseColor;
//     }
// }

// function handleMouseEnter() {
//     const currentColor = title.style.color;
//     if (currentColor === baseColor) {
//         title.style.color = thirdColor;
//     } else if (currentColor === secondColor) {
//         title.style.color = forthColor;
//     } else {
//         title.style.color = baseColor;
//     }
// }

// #2-6 class

const clickedClass = "clicked";

// function handleClick() {
//     const currentClass = title.className;
//     if (currentClass !== clickedClass) {
//         title.className = clickedClass;
//     } else {
//         title.className = "";
//     }
// }

// 태그 클래스에 다른 값이 있으면, 이전 값도 같이 없애버리는 문제점이 있다. 

// function handleClick() {
//     const currentClass = title.className;
//     if (currentClass !== clickedClass) {
//         title.classList.add(clickedClass);
//     } else {
//         title.classList.remove(clickedClass);
//     }
// }

// 위 상태에서는 한 번의 클릭에서는 동작하지만, remove가 되지 않는다. 왜냐면 currentClass 가 더 이상 clickedClass 인 "clicked" 가 아니라 "btn clicked" 이기 때문에 

// function handleClick() {
//     const hasClass = title.classList.contains(clickedClass);
//     if (hasClass) {
//         title.classList.remove(clickedClass);
//     } else {
//         title.classList.add(clickedClass);
//     }
// }

// is it long?

function handleClick() {
    title.classList.toggle(clickedClass);
}

// toggle 안에 있는 값을 체크해서 class 가 없으면 add, 있으면 remove

function network() {
    if (network) {
        console.log("It is online.");
    } else {
        console.log("It is offline.");
    }
}

function init() {
    // title.style.color = baseColor;
    title.addEventListener("click", handleClick);
    // title.addEventListener("dblclick", handleDoubleClick);
    // title.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("online", network);
}

init();
