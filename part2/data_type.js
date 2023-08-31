
// primitive data type: 변수에 값이 그대로 저장됨
var v1 = 1234;
var v2 = 'ABC'

// reference data type: array, object
// 변수에 reference가 저장됨 (변수가 저 위치에 있다.)
var arr1 = [1, 2, 3];
var obj1 = { name : 'Kang' };


// 차이점
var name1 = '주형';
var name2 = name1;
name1 = '주동생'
console.log(name1); // 주동생
console.log(name2); // 주형

var name3 = { name : '길동' };
var name4 = name3;
name3.name = '길은'
console.log(name3.name); // 길은
console.log(name4.name); // 길은


// 예제

// 1
var name1 = { name : 'Kim' };
var name2 = { name : 'Kim' };

// 두 "화살표"가 같은 화살표냐? -> 아님
console.log(name1 == name2) // false
console.log(name1 === name2) // false


// 2
// object 변경하는 함수
function changeFunc(obj) {
    obj.name = 'Park';
}
var name1 = { name : 'Kim' };
changeFunc(name1);
console.log(name1); // { name: 'Park' }


function changeFunc2(obj) {
    obj = { name : 'Choi' }
}
var name1 = { name : 'Kim' };
changeFunc2(name1);
console.log(name1); // { name: 'Kim' }