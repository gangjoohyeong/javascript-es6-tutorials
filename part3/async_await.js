
// async, await
// ES8 (2017) 에 나온 문법

// async를 function 앞에 붙이면 함수 실행 후에 Promise 오브젝트가 남음
// 성공만 판정 가능
// return Promise.reject('실패') => 이렇게 강제로 실패 넣을 수 있긴 함

async function add() {
    return 1 + 2;
}

add().then(function(result) {
    console.log('성공!');
    console.log('결과: '+result);
})
// 성공!
// 결과: 3


// await: async 함수 안에서만 사용하는 문법

async function add2() {
    var promise = new Promise(function(resolve, reject) {
        var cal = 1 + 3;
        resolve(100);
    });
    // promise.then(function() {
    //     console.log('성공! (2)');
    // });

    // 위의 주석이랑 같은 코드
    // promise가 끝날 때까지 기다리라는 뜻
    var result = await promise;
    console.log(result);
}
add2(); // 100

// await은 promise 실패 시 에러나고 멈춤 => 방지하려면 try, catch 사용

async function add3() {
    var promise = new Promise(function(resolve, reject) {
        var cal = 1 + 3;
        reject(200);
    });
    try {
        var result = await promise;
        console.log(result);
    } catch {
        console.log('오류 발생!');
    }
}

add3(); // 오류 발생!



