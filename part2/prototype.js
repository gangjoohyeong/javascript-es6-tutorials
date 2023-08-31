
// prototype: 상속을 구현하는 또 다른 문법, js에만 있는 문법

function Student(name, age) {
    this.name = name;
    this.age = age;
    this.sayHi = function() {
        console.log('안녕하세요. '+this.name+'입니다.')
    }
}

Student.prototype.gender = 'M'


var student1 = new Student('Park');
var student2 = new Student('Kim');

console.log(student1.gender) // M



// 이런 내장 함수를 어떻게 사용할 수 있지?
// toString이라는 메서드가 없으면 부모의 prototype을 찾는 것
// 부모의 부모의 ... 올라가다 toString을 찾음
student1.toString() 


var arr = [1, 2, 3]; // 이거는 사실
var arr = new Array(1, 2, 3); // 이렇게 만들어짐 -> Array를 arr에 상속한 것
arr.sort() // Array에 sort()라는 메서드가 있으니까 arr에도 사용할 수 있는 것


// Object도 마찬가지
var obj = { name: 'Kim' }; // 이거는 사실
var obj = new Object; // 이렇게 만들어짐



//// prototype 특징

// prototype은 함수에만 생성됨
// 내 부모 유전자(부모의 prototype)를 검사하고 싶으면 __proto__

function Student(name, age) {
    this.name = name;
    this.age = age;
    this.sayHi = function() {
        console.log('안녕하세요. '+this.name+'입니다.')
    }
}
Student.prototype.gender = 'M'

var student1 = new Student('Park');
console.log(student1.__proto__); // { gender: 'M' }

// __proto__를 이용해서 부모 강제 등록 (실제로 이렇게 사용은 안 함)
var parents = { name: 'Kim' };
var children = {};
children.__proto__ = parents;
console.log(children.name);