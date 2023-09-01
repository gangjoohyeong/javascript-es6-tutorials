console.log(1);
setTimeout(()=>{ console.log(2)}, 1000); // 비동기식으로 처리함 (자바스크립트가 아니라 브라우저 때문)
console.log(2);
console.log(3);
// 1
// 2
// 3
// 2

// setTimeout, eventListener, ... 같은 오래 걸리는 작업들은 
// "웹 브라우저"가 Web API라는 공간에 보냈다가 불러오는 방식으로 비동기 처리


/////////////////////////////


// 순차적(동기적)으로 실행시키고 싶으면 어떻게 할까?: callback 함수
// callback 함수: 함수 안에 있는 함수
console.log(1);
setTimeout(function() { console.log(2) }, 1000);
addEventListener('click', funcName);


// 1.
// 이렇게 하면 아래 함수가 먼저 실행될 수도 있음
function firstFunc() {
    console.log(1);
}

function secondFunc() {
    console.log(2);
}

firstFunc();
secondFunc();

// 2.
// 이런식으로 callback 함수를 만들면 된다.

function firstFunc(func) {
    console.log(1);
    func();
}

function secondFunc() {
    console.log(2);
}

firstFunc(secondFunc);


// 이런식으로도 씀
// 근데 가독성이 너무 안 좋음
firstFunc(function() {
    secondFunc(function() {
        thirdFunc(function() {

        })
    })
})

// -> 이 가독성 문제를 개선한 것이 Promise 패턴
