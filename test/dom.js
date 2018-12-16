const title = document.querySelector("#title");
// DOM document object module
// js 는 html에 있는 모든 요소를 가지고 오고, 그걸 객체로 바꾼다. 모든 html이 객체가 된다. 
// getElementById 보다는 querySelector 를 주로 사용하게 된다. 
// querySelector 에서 html 요소를 선택하는 건 css 와 동일하다. id는 # class 는 .

title.innerHTML = "Hi! From JS";
// title.style.color = "red";
// title 이라는 변수로 id가 title 인 요소로 지정했다. 1번 라인에서

document.title = "JS change it";
// document 는 html 문서를 의미하고, 그 중에서 title은 head에 있는 title을 의미
// js 로 선택하는 것은 모두 객체가 되는 것이다.

console.dir(title);
// console 이라는 object 안에 dir 이라는 function은 title 에서 할 수 있는 모든 이벤트를 console 에서 볼 수 있다.

// js는 html, css를 바꾸고 싶어 만들어진 것이 아니라 이벤트에 반응하기 위해서
// 이벤트라는 것은 웹사이트에서 발생하는 것, click resize submit input change load print

function handleResize(){
    console.log("I have been resized")
}

window.addEventListener("resize", handleResize());
// handleResized() 의 의미는 이벤트 발생 여부와 상관없이 함수를 즉시 호출하라는 것
// resize를 하지 않아도 handelResize 라는 함수를 바로 실행 

window.addEventListener("resize", handleResize);
// handleResize 의 의미는 정해진 이벤트가 발생했을 때만 함수를 호출하라는 것
// 정해진 함수의 정의대로 브라우저 화면이 resize가 될 때에만 함수 호출 

function handleResizeEvent(event) {
    console.log(event);
}

window.addEventListener("resize", handleResizeEvent);
// resize 이벤트가 있을 때, handleResizeEvent 함수를 호출하고, 함수는 event 에 대한 정보를 보낸다.

if (10 === 5){
    console.log("hi");
} else if (10 > 5){
    console.log("That's right");
} else {
    console.log("ho");
}

// if, else 구조
// if 의 조건 내의 것이 참이면 block 아니면 else 의 block
/*if (true condition) {
    block
} else if (condition) {
    block
} else {
    block
}*/
// if 조건은 항상 참이어야 실행된다. 

if (20 > 5 && "sean" === "sean") {
    console.log("Both of them are Yes");
} else {
    console.log("Maybe one of them is true... but it's No");
}

// && and 조건, 모든 조건이 참이어야 if 의 block을 실행한다. 

if (20 < 5 || "sean" === "sean") {
    console.log("One or both of them is Yes");
} else {
    console.log("Absolutely No");
}

// || or 조건, 모든 조건 중 하나라도 참이면 if 의 block을 실행한다. 

// ture 와 false 의 && 조건
/*true && true = true;
false && true = false;
true && false = false;
false && false = false; */

// ture 와 false 의 || 조건
/*true || true = true;
false || true = true;
true || false = true;
false || false = false; */

// const age = prompt("How old are you?");

// if (age > 21) {
//     console.log("You can drink beer! Let's chill");
// } else if (age >= 18 && age <= 21) {
//     console.log("You can drink but you should not");
// } else {
//     console.log("Sorry, Go back home");
// }

