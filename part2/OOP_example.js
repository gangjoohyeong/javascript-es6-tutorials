// 예제

// 1

var dog1 = { type : '말티즈', color : 'white' };
var dog2 = { type : '진돗개', color : 'brown' }; 

class Dog {
    constructor(type, color) {
        this.type = type
        this.color = color
    }
}

var dog1 = new Dog('말티즈', 'white');
var dog2 = new Dog('진돗개', 'brown');

// 2

var cat1 = { type : '코숏', color : 'white', age : 5 };
var cat2 = { type : '러시안블루', color : 'brown', age : 2 }; 

class Cat extends Dog {
    constructor(type, color, age) {
        super(type, color);
        this.age = age;
    }

}

var cat1 = new Cat('코숏', 'white', 5);
var cat2 = new Cat('러시안블루', 'brown', 2);

console.log(cat1); // Cat { type: '코숏', color: 'white', age: 5 }
console.log(cat2.color); // brown


// 3
class Dog_ {
    constructor(type, color) {
        this.type = type;
        this.color = color;
    }
    plusAge() {
        if (this instanceof Cat_) {
            this.age++
        }
    }
}

class Cat_ extends Dog_ {
    constructor(type, color, age) {
        super(type, color);
        this.age = age;
    }
}


// 4

class Unit {
    constructor() {
        this.attack = 5
        this.hp = 100
    }
    get battePoint() {
        return this.attack + this.hp
    }
    set heal(up) {
        this.hp = this.hp += up
    }
}

var unit1 = new Unit();

console.log(unit1.battePoint); // 105
unit1.heal = 50;
console.log(unit1.hp) // 150

// 5
var data = {
    odd : [],
    even : [],
    setData: function(...rest) {
        rest.forEach((item) => {
                if (item % 2 == 0) {
                    this.even.push(item);
                } else {
                    this.odd.push(item);
                }
            }
        )
    },
    getData: function(){
        concatArray = [...this.odd, ...this.even];
        console.log(concatArray.sort((a, b) => a - b));
        
    }
}
data.setData(1,2,3,4,5)
console.log(data)
/*
{
    odd: [ 1, 3, 5 ],
    even: [ 2, 4 ],
    setData: [Function: setData],
    getData: [Function: getData]
}
*/


data.getData() // [ 1, 2, 3, 4, 5 ]