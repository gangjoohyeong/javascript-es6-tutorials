// 호이스팅: 변수 선언을 변수 범위 맨 위로 끌고 감
// 참고: 함수 만들 때도 호이스팅 발생함
// 참고: let, const는 undefined 할당하지 않고, 그냥 에러 발생시킴

console.log(age) // undefined, 에러가 뜨지 않음

var age = 30; // 선언 + 할당

console.log(age) // 30



// 전역 변수, 지역 변수
var age = 20; // 전역 변수
function func1() {
    console.age(age) // 사용 가능
}


function func2() {
    var height = 180; // 지역 변수, 이 함수 안에서만 사용
    console.log(height)
}


// window로 전역변수 만들기
window.name = 'Kim'; // 전역 변수 생성 시 좀 더 권장하는 방식

console.log(window.name)



// 전역 변수 연습 문제
if (true){
    let a = 1;
    var b = 2;
    if (true) {
        let b = 3;
    }
    console.log(b); // 2
}


// 연습 문제

// 1
// undefined 아니고, 에러 발생
// let은 호이스팅이 되지만, undefined를 할당하지는 않음
func1();
function func1() {
  console.log(hi);
  let hi = 'Hello!';
} 


// 2
// 함수가 아니라는 에러 발생
func2();
var func2 = function() {
  console.log(hi);
  var hi = 'Hello!';
} 


// 3
// 함수를 실행시키지 않았으므로 a가 바뀌지 않음
let a = 1;
var func3 = function() {
  a = 2;
}
console.log(a); // 1 출력

// 4
// a = 1, b = 4
// a: let으로 선언한 a가 전역으로 선언한 a보다 범위가 더 좁고 가깝기 때문에 1이 됨
// b: var b 와 window.b는 완전히 같기 때문에 4로 바뀜
let a = 1;
var b = 2;
window.a = 3;
window.b = 4;

console.log(a + b); // 1 + 4 = 5 출력

// 5

// let의 범위는 중괄호 -> for 반복문도 중괄호에 해당
// i 값이 for 반복문 내에 남아있기 때문에 그걸 가져다 줌
// 5, 5, 5, 5, 5
for (var i = 0; i < 5; i++) { 
    setTimeout(function() { console.log(i); }, i*1000 ); 
  }

// 0, 1, 2, 3, 4
for (let i = 0; i < 5; i++) { 
    setTimeout(function() { console.log(i); }, i*1000 ); 
  }


