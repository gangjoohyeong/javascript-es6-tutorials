
// 선언, 할당, 범위에서 차이

////////////////////////////////

// var: 재선언 가능, 재할당 가능, 범위: function
var name = 'Kim';
var name = 'Park';

////////////////////////////////

function func() {
    var name = 'Kim';
    name;
}

name; // 불가능

////////////////////////////////

// ES6 이후

// let: 재선언 불가, 재할당 가능, 범위: 중괄호 {}
// const: 재선언 불가, 재할당 불가능, 범위: 중괄호 {}

let age = 30;
age = 20;


const person = { name: 'Kang' }
person.name = 'Kim' // Object 안에 있는 변수는 변경 가능, 이건 재할당이 아님


Object.freeze(person) // 이러면 값 변경 불가능


////////////////////////////////

if (true) {
    let name = 'Park'; // 범위: 중괄호 {}

}