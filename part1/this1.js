// 브라우저가 아닌 node.js에서는 window 대신 {} 출력

// this: 뜻이 3, 4개 정도 됨
console.log(this) // Window: 기본 함수들 수납 공간

function func() {
    console.log(this); // Window: 기본 함수들 수납 공간
}
func()


// 'use strict'; // 엄격한 문법 사용

var obj1 = {
    data : 'Kim',
    func : function() {
        console.log(this); // 오브젝트 안에 있는 함수 (메서드)의 this는 그 함수를 가지고 있는 object를 뜻 함
    }
}


obj1.data;

obj1.func(); // { data: 'Kim', func: [Function: func] }



var obj2 = {
    data : {
        func : function() {
            console.log(this);
        }
    }
}

obj2.data.func(); // { func: [Function: func] }


// Arror function: this 값을 함수 밖에 있던 것을 그대로 씀
var obj3 = {
    data : {
        func : () => { // 모양 확인
            console.log(this);
        }
    }
}

obj3.data.func(); // Window

// function 생략 가능
var obj3 = {
    data : {
        func() { // 모양 확인
            console.log(this);
        }
    }
}

obj3.data.func(); // Window



// this 뜻 정리
// 1. 그냥 쓰거나 일반 함수 안에서 쓰면 {window}
// 2. 오브젝트 내 함수 안에서 쓰면 그 함수를 가지고 있는 오브젝트를 뜻함

// 사실 1, 2는 같은 것 -> 사실 자바스크립트 코드들은 큰 오브젝트 안에 들어있다고 생각하기 (window)
// func() == window.func() // true

// 2번 뜻을 이해하면 됨