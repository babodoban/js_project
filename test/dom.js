const title = document.querySelector("#title");

// DOM document object module
// js 는 html에 있는 모든 요소를 가지고 오고, 그걸 객체로 바꾼다. 모든 html이 객체가 된다. 

title.innerHTML = "Hi! From JS";
title.style.color = "red";
document.title = "JS change it";

// js 로 선택하는 것은 모두 객체가 되는 것이다. 

console.dir(title);

// title 에서 할 수 있는 모든 이벤트를 console 에서 볼 수 있다.