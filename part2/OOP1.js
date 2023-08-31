/// 상속

// ES5
// prototype, function func() {} -> 옛날 문법

// ES5 문법: Object.create(prototype으로 만들 object);

var parents = { name : 'Kang', age : 50 };
var children = Object.create(parents);

console.log(children) // {}
console.log(children.name) // Kang

children.age = 20;
console.log(children.age) // 20

var children_children = Object.create(children);
console.log(children_children.age) // 20


// ES6

// ES6에서 consturctor 만드는 법
class parents {
    constructor() {
        this.name = 'Kim';
        this.sayHi1 = function() {
            console.log('hello1');
        }
    }
    // 여기에 함수를 만들면 자식 object에 추가 안 되고, 부모 prototype에 저장
    sayHi2() {
        console.log('hello2');
    }
}
var children = new parents();

children.__proto__;
Object.getPrototypeOf(Children);

