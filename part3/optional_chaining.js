
// ?. / ?? 연산자
// 최신 문법



// ?. 연산자
var user = { name : 'kim', age : 20 };


// 왼쪽이 비어있으면 오른쪽을 출력해주지 않음
// 왼쪽이 null, undefined이면 점 안 찍어주고 undefined 반환
console.log(user?.age) // 20

// 언제 사용?
// 중첩된 object 자료에서 자료 뽑을 때 reference 에러 없이 안전하게 뽑기
var user = { name : 'kim', age : { value : 20 } };
console.log(user.age.value); // 20

var user = { name : 'kim' };
// console.log(user.age.value) => 에러 발생!
// 이런 에러를 방지하기 위함
console.log(user.age?.value); // undefined

// 참고: 중첩 안 되어있을 때는 자동으로 undeined 날려줘서 의미 없음



// ?? 연산자
// 왼쪽이 비어있으면 오른쪽을 대신 출력함
var user = { name : 'kim' };
console.log( user ?? '로딩 중' );
