function sayHello_01(name01, age01){
    console.log("Hello!", name01, "I'm ", age01, "years old");
}

sayHello_01("sean", 33);

// 함수를 정의하는 방법. 
// function 함수이름 () { 함수 정의 }

// 함수의 ( ) 안에 있는 정보를 사용한다. parameter, argument  등으로 부름 
// 함수명 뒤의 ( ) 안에 메시지가 없으면, 처리하지 않는다. 
// 두 개의 값을 처리하려면 , 로 구분해서 해줘야 한다. 

function sayHello_02(name02, age02){
    console.log("Hello! " + name02 + ". I'm " + age02 + " years old");
}

sayHello_02("sean", 33);

// old style

function sayHello_03(name03, age03){
    console.log(`Hello ${name03} you are ${age03} years old`);
}

sayHello_03("sean", 33);

// using `` 백틱?

function sayHello_04(name04, age04){
    console.log(`Hello ${name04} you are ${age04} years old`);
}

const greetSean_consolLog = sayHello_04("sean", 33);

console.log(greetSean_consolLog);

// greetSean 이라는 변수는 sayHello_04 함수의 결과값을 돌려주는 것인데, 해당 변수의 log는 undefined 로 나온다. "greetSean"은 sayhello_04의 실행된 결과 값이다. return value
// 30~32 행 때문에 console에 log 가 남는 것

function sayHello_05(name05, age05){
    return `Hello ${name05} you are ${age05} years old`;
}

const greetSean_return = sayHello_05("sean", 33);

console.log(greetSean_return);

// return을 사용해서 값을 돌려준다. 그 값을 46 행에서 log 해주는 거다. 그리고 41~43 행에서 return 을 사용했기 때문에 추가적인 console log에는 정상 출력될 것입니다.

// console 를 통해 object를 알아보자. 

const calcurator = {
    plus : function(a,b) {
        return a + b;
    },
    minus : function(a,b){
        return a - b;
    },
    multiply : function(a,b){
        return a * b;
    },
    divide : function(a,b){
        return a / b;
    }
}

const plus = calcurator.plus(5, 5);
const minus = calcurator.minus(20, 10);
const multiply = calcurator.multiply(21, 7);
const divide = calcurator.divide(25, 5);
console.log(`Plus result : ${plus} \nMinus result : ${minus} \nMultiply result : ${multiply} \nDivide result : ${divide}`);

// 함수를 만들어보자. 