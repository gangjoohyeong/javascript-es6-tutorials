
// getter, setter
// 데이터의 무결성을 위해 사용!

var person = {
    name : 'Park',
    age : 30,
    // get: 데이터 조회
    // getter 함수: return 필수
    get nextAge() {
        return this.age + 1
    },
    // set: 데이터 변경
    // setter 함수: 파라미터가 1개 있어야 함
    set setAge(age) {
        this.age = parseInt(age); // 실수 방지 가능
    }
}

console.log(person.age + 1); // 31 
console.log(person.nextAge); // 31 

// 왜 이거 씀?
// -> object 자료가 복잡할 때, object 자료 수정시 편리

person.setAge = '35';
console.log(person.nextAge); // 31
console.log(person.age); // 35

//////////


class Person {
    constructor() {
        this.name = 'Park';
        this.age = 20;

    }
    get nextAge() {
        return this.age + 1
    }
    set setAge(age) {
        this.age = age
    }
}

var person1 = new Person();
console.log(person1.nextAge) // 21
person1.setAge = 23
console.log(person1.age) // 23