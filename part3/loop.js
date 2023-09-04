
// 그냥 반복문
// forEach(): Array 전용
// for in: Object 전용
// for of: iterable 전용

// for in
var obj1 = { name: 'Kang', age: 26 };

class Parents {

}

Parents.prototype.name = "Park";
var obj2 = new Parents();


for (var key in obj1) {
    console.log(key);
    console.log(obj1[key]);
}
// name
// Kang
// age
// 26

// 1. enumerable한 것만 반복해줌
// 2. 부모의 prototype도 반복해줌



// for of
// iterable한 것만 사용 가능
// Array, 문자, arguments, NodeList, Map, Set에서 사용 가능
// 파이썬 반복문이랑 비슷한 느낌?

var arr1 = [2, 3, 4, 5];

for (var key of arr1) {
    console.log(key);
}
// 2
// 3
// 4
// 5

for (var key of '강주형') {
    console.log(key);
}
// 강
// 주
// 형

// iterable 관련해서 자세히 알고 싶으면 공부 (알 필요 없긴 함)
console.log(arr1[Symbol.iterator]());

