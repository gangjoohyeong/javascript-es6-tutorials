
// 이걸 좀 더 편하게 하자
var arr = [2, 3, 4];

var a = arr[0];
var b = arr[1];
var c = arr[2];


// 이렇게
var [a, b, c] = [2, 3, 4];
var [a, b, c = 10] = [2, 3];

console.log(c); // 10

// object도 가능
var obj = { name : 'Kang', age : 26 }
var name = obj.name;
var age = obj.age;

var { name, age = 31 } = { name : 'Kang' };


console.log(name); // Kang
console.log(age); // 31


var name = 'kang'
var age = 26

// 아래 두 개는 같은 뜻
var obj = {name : name, age : age}
var obj = { name, age}


// 함수에서 이용
var obj = { name : 'Kim', age : 30 };

function Func({ name, age }) {
    console.log(name);
    console.log(age);
}

Func(obj);
// Kim
// 30

function Func2( [param1, param2] ) {
    console.log(param1);
    console.log(param2);
}

Func2([3, 5]);
// 3
// 5
  

