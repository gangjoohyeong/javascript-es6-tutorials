// 예시 1
// promise1이 성공인지 실패인지 판정해줘야 함
var promise1 = new Promise(function(resolve, reject) {
    var cal = 1 + 1;
    resolve(cal);
});

promise1.then(function(result) {
    // promise1가 성공했을 때 실행할 코드
    console.log('성공!');
    console.log(result)

}).catch(function(){
    // 앞에 함수가 실패했을 때 실행할 코드
    console.log('실패..')
})


// 예시 2
// 1초 후에 성공하는 promise, 성공시 특정 코드 실행
var promise2 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve();
    }, 1000);
});

promise2.then(function() {
    // promise2가 성공했을 때 실행할 코드
    console.log('성공!(2)');

}).catch(function(){
    // 앞에 함수가 실패했을 때 실행할 코드
    console.log('실패..(2)')
})


// Promise의 3가지 상태
// 1. 성공하면 <resolved>
// 2. 판정 대기중이면 <pending>
// 3. 실패하면 <rejected>

// Promise는 동기 -> 비동기 바꿔주는 것이 아님
// 그냥 코딩 디자인 패턴 중 하나임 (callback 함수 대체품)