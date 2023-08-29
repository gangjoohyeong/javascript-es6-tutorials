

// spread operator

// Array에 붙이면 대괄호 제거
var arr = ['hello', 'world'];
console.log(arr); // ['hello', 'world']
console.log(...arr); // hello world


var word = 'hello';
console.log(word); // hello
console.log(...word); // -> 'h', 'e', 'l', 'l', 'o', ->  h e l l o
console.log(word[0]) // h
console.log(...word[0]) // h

// Array 합칠 때 유용
var a = [1, 2, 3];
var b = [4, 5];

var c = [...a];
console.log(c); // [1, 2, 3]

var d = [...a, ...b];
console.log(d); // [1, 2, 3, 4, 5]


// Array를 Deep copy 할 때 유용

// 1. not Deep copy
var a = [1, 2, 3];
var b = a;
console.log(a); // [1, 2, 3]
console.log(b); // [1, 2, 3]

a[3] = 4;
console.log(a); // [1, 2, 3, 4]
console.log(b); // [1, 2, 3, 4]
// reference data type(Array, Object)에서는 이런 현상 발생

// 2. Deep copy
var a = [1, 2, 3];
var b = [...a];
a[3] = 4;
console.log(a); // [1, 2, 3, 4]
console.log(b); // [1, 2, 3]


// Object 합치기

var obj1 = { a : 1, b : 2};
var obj2 = { ...obj1, c : 3};

console.log(obj2); // {a: 1, b: 2, c: 3}

// copy 하다가 값 중복 발생 예시

var obj1 = { a : 1, b : 2 };
var obj2 = { a : 2, ...obj1 }; // { a: 1, b: 2 }

// 뒤에 있는 거로 덮어씌워지는 느낌
console.log(obj2);


