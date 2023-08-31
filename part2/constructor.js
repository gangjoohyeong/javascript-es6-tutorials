
// 하나하나 만들기 귀찮다 -> constructor 사용해보자
var student1 = { name : 'Kang', 
                 age : 26,
                 sayHi : function() {
                    console.log('안녕하세요. '+ this.name + '입니다.')
                    }
                }
var student2 = { name : 'Kang', age : 26}
var student3 = { name : 'Kang', age : 26}


// constructor
// 관습적으로 대문자로 시작
function Student(name, age) {
    this.name = name;
    this.age = age;
    this.sayHi = function() {
        console.log('안녕하세요. '+this.name+'입니다.')
    }
    this.sayAge = function() {
        console.log('저는 '+this.age+'살입니다.')
    }
}

var student4 = new Student('Kang', 26);
var student5 = new Student('Kim', 24);
var student6 = new Student('Lee', 27);

student4.sayHi();
student4.sayAge();
student5.sayHi();
student5.sayAge();
student6.sayHi();
student6.sayAge();

// this: constructor (생성자)에서 새로 생성되는 object (instance)


// 예제

var product1 = { name : 'shirts', price : 50000 };
var product2 = { name : 'pants', price : 60000 };

function Product(name, price) {
    this.name = name
    this.price = price

    this.vat = function() {
        console.log(this.price * 0.1)
    }
}
product1 = new Product('shirts', 50000);
product2 = new Product('pants', 60000);

product1.vat()