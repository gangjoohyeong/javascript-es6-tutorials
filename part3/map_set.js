
// 1. Map

// 자료간의 연관성을 표현하기 위해 사용
var person = new Map();
person.set('name', 'Kang');
person.set('age', 20);
console.log(person); // Map(2) { 'name' => 'Kang', 'age' => 20 }

// Object는 자료이름으로 글자만 가능
// Map은 다 가능
var person2 = new Map();
person2.set([1, 2, 3], '테스트');
console.log(person2); // Map(1) { [ 1, 2, 3 ] => '테스트' }

// 자료 꺼내기: get() 메서드
console.log(person.get('name')); // Kang

// 자료 삭제: delete() 메서드
console.log(person.delete('age'));

// 자료 갯수: size() 메서드
console.log(person.size); // 1




// 2. Set
// 집합, 중복 제거에 주로 사용

var notebooks = ['John', 'Tom', 'Andy', 'Tom'];
var notebooks2 = new Set(['John', 'Tom', 'Andy', 'Tom']);
console.log(notebooks2); // Set(3) { 'John', 'Tom', 'Andy' }
notebooks2.add('Sally');
console.log(notebooks2); // Set(4) { 'John', 'Tom', 'Andy', 'Sally' }


// 중복 제거 실전

var notebooks = [ 'john' , 'tom', 'andy', 'tom' ];

var notebooks2 = new Set(notebooks); // Array를 Set으로 바꾸기

notebooks = [...notebooks2]  // Set을 Array로 바꾸기

console.log(notebooks); // [ 'john', 'tom', 'andy' ]