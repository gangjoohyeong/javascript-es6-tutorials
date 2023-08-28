// 1

var person = {
    name: 'Son',
    sayHi: function() { 
        console.log("Hello, I'm " + this.name) // arrow function 쓰면 name 이렇게 쓰면 안 됨
    }
}

person.sayHi(); // Hello, I'm Son



// 2


var files = {
    data : [1,2,3,4,5],
        
}

files.sumFunc = function() {

    var sum = 0;
    this.data.forEach(a => sum = sum + a);
    console.log(sum);
}

files.sumFunc();

