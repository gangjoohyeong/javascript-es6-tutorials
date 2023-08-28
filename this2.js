// this 3번째 뜻

function machine() {
    this.name = 'Kim' // this: machine으로 부터 새로 생성되는 object (인스턴스)
}

var object1 = new machine() // new: 새로운 object를 만들어라


// this 4번째 뜻

// HTML 요소 찾고, 그걸 클릭하면 function 실행
document.getElementById('click').addEventListener('click', function(e) {
    this; // == e.currentTarget // 지금 이벤트가 동작하는 곳
    // == document.getElementById('click')
});



// case study 1

let array1 = [1, 2, 3];
array1.forEach(function(a) { // 함수 안에 함수: callback 함수
    console.log(this); // Window // 1, 2번 뜻
    console.log(a); // 1, 2, 3
});

// case study 2

var obj1 = {
    names: ['Kim', 'Lee', 'Park'],
    func: function() {
        console.log(this); // obj1
        obj1.names.forEach(function() {
            console.log(this); // window
            
        })
    }
}

obj1.func();


// case study 3
// arrow function: 내부의 this 값을 변화시키지 않음, 외부 this값 그대로 재사용 가능

var obj2 = {
    names: ['Kim', 'Lee', 'Park'],
    func: function() {
        console.log(this); // obj2
        obj2.names.forEach(()=> {
            console.log(this); // obj2
            
        })
    }
}

obj2.func();