

function add(a, b, c) {
    console.log(a+b+c);
}
add(1,2,3) // 6

var arr = [10, 20, 30]

add.apply(undefined, arr); // 60, 예전 방식 // array 형태로 파라미터를 넣을 수 있기 때문에 이렇게 쓴 것 (맨 아래 코드 참고)
add(...arr); // 60, 요즘 방식


// apply
var person = {
    hello : function() {
        console.log(this.name + '안녕')
    }
}
person.hello(); // undefined안녕

var person2 = {
    name : '주형'
}

person.hello.apply(person2); // 주형안녕, person.hello()를 person2에 적용하고 싶을 때 사용


// call
person.hello.apply(person2, [1, 2]); // (hello에 대한) 파라미터 추가하고 싶을 때 apply는 array 형태로 넣기 가능
person.hello.call(person2, 1, 2); // call은 하나하나 넣어야 함. 이게 유일한 차이점

