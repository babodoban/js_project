// alert('Im working. Im JS. Im Beautiful. Im worth it');
console.log('Im working. Im JS. Im Beautiful. Im worth it');

// a = 221;
// b = a - 5;
// console.log(b);

// create - initialize - use

// let a = 221;
// let b = a - 5;
// a = 4;
// console.log(b, a);

const a = 221; //constant 상수. 변하지 않는 값
console.log(a);
//let 과 const 의 차이점. let은 변수를 바꿀 수 있고, const 는 바꿀 수 없는 값. 
//let const var 
//let으로 변수를 create 하고 initialize, 그리고 하나의 변수에 한 번만 선언 가능. 중복으로 변수 선언하면 에러가 발생
//const는 변수가 아니라 고정된 값, 상수를 선언하는 것
//var는 변수를 선언하지만 하나의 변수에 여러번 선언 가능. 

// 2018.12.11 
// 변수를 선언할 때 기본으로 const 를 쓰라고? 필요할 때까지 let 을 쓰지 말라고?

//string = text, " " 안에 숫자를 넣어도 이건 텍스트
const name = "Sean";
console.log(name);

// boolean = true or false, it is not the text
const answer = true;
console.log(answer);

// number = it is number
const number = 23;
console.log(number);

// float = floating number 소숫점 
const num = 55.12;
console.log(num);

// array : storage data like list, 여러 스트링을 하나로 합친 것

// camel case : start with lower case and use upper case if it needs space. cause js don't allow use space at variable

const mon = "Mon";
const tue = "Tue";
const wed = "Wed";
const thu = "Thu";
const fri = "Fri";

console.log(mon, tue, wed, thu, fri);
// it is not efficient

const daysOfWeek =["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

console.log(daysOfWeek);
console.log(daysOfWeek[3]);
// use [] for array. it can contain data text, boolean, number, float and variable!

// object : array 와 다른 점은 각각에 value를 줄 수 있다.
const seanInfo = {
    name : "Sean",
    age : 33,
    gender : "Male",
    marriage : true,
}

console.log(seanInfo);
console.log(seanInfo.age);

seanInfo.age = 34;

console.log(seanInfo.age);

const seanInfo2 = {
    name : "Sean",
    age : 33,
    gender : "Male",
    marriage : true,
    movies : ["Three Idiots", "Search", "Matrix", "Social Network"],
    foods : [
        {
            name:"Sushi", 
            fatty:false
        }, 
        {
            name:"Burger", 
            fatty: true
        }
    ]
}

console.log(seanInfo2);

// object 내에 array가 포함되는 것은 문제없다.

// js 가 문제가 있어도 html, css 는 문제가 없다. 