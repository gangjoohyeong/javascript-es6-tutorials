
// 함수 만들기

function func() { // 1번 방법

}


var func = function() { // 2번 방법

}


// arrow function: 3번 방법

var func = (a) => { return a + 10 }

var func2 = a => { return a + 10 } // 파라미터 1개면 소괄호 생략 가능

var func3 = a => a + 10 // 코드 1줄이면 중괄호와 return 생략 가능



[1, 2, 3, 4].forEach(function(a) {
    console.log(a);
})


[1, 2, 3, 4].forEach(a => console.log(a));




var obj1 = {
    func : () => {
        console.log(this);
        return this;
    }
}

obj1.func();