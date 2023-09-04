
// Symbol: 쓸데는 딱히 없음, ES6에 추가됨
// Object의 key 값으로 사용 가능
// 민감한 자료를 저장할 때 사용

var weight = Symbol('내 몸무게');
var height = Symbol('내 키')

var person = { name : 'Kang', age : 26 };
person.weight = 100; 
person[weight] = 200; // enumerable 하지 않기 때문에 반복문에서 출력되지 않음
person[height] = 160; // enumerable 하지 않기 때문에 반복문에서 출력되지 않음

console.log(person);
// { name: 'Kang', age: 26, weight: 100, [Symbol(내 몸무게)]: 200, [Symbol(내 키)]: 160 }

for (var key in person) {
    console.log(person[key]);
}
// Kang
// 26
// 100


var person2 = { name : 'Kang', [height] : 160 }; // 이렇게도 가능


// symbol 특징
// symbol은 유니크하다.

var a = Symbol('설명1');
var b = Symbol('설명1');
console.log(a == b); // false
console.log(a === b); // false



// 전역 symbol 만들기

var a = Symbol.for('설명1');
var b = Symbol.for('설명1'); // var b = a 이것과 같음
console.log(a == b); // true
console.log(a === b); // true


var arr1 = [2, 3, 4];

// Array를 만들 때 들어가는 기본 symbol
// symbol이니까 반복문 돌릴 때 나오지 않는 것임
console.log(arr1[Symbol.iterator]); // [Function: values]
