
// Rest parameters
// arguments와 비슷한 역할을 하는 ES6 문법

// arguments: 모든 파라미터를 []에 담아줌
function func(temp, a, b, c) {
    for (var i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}

// rest parameter: a, b 뒤에 오는 파라미터만 []에 담을 수 있음 (더 유연함), rest는 항상 맨 뒤에 써야 함
function func2(a, b, ...parameters) {
    console.log(parameters);
    console.log(parameters[0]);
}

func2(1,2,4,2,3,5,2); 
// [ 1, 2, 4, 2, 3, 5, 2 ]
// 4


// 함수 파라미터 자리에 ... -> rest parameters
// 나머지 -> spread


function func3(...rest) {
    for (var i = 0; i < rest.length; i++) {
        console.log(rest[i]);
    }
}

func3(4, 2, 3, 1, 23);
// 4
// 2
// 3
// 1
// 23

