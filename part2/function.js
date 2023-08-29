
function add(a, b=10) {
    console.log(a + b);
}

add(1); // 11 (1 + 10)
add(2, 5); // 7 (2 +5)

function add2(a, b = 2 * a) {
    console.log(a + b);
}

add2(3) // 9 (3 + 2 * 3)


function tempFunc() {
    return 10
}

function add3(a, b = tempFunc()) {
    console.log(a+b)
}

add3(2); // 12 (2 + 10)


// argument

function func(a, b, c) {
    console.log(arguments);
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
}

func(1, 2, 3);
// [Arguments] { '0': 1, '1': 2, '2': 3 }
// 1
// 2
// 3


// argument 실전
function func2(a, b, c) {
    for (var i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}

func2(2, 3, 4);
// 2
// 3
// 4
