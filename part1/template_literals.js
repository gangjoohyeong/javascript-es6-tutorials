
var word = 'Son'

// 이전 방식
var sentence = '안녕하세요. 저는 ' + word + '입니다.'

// ES6 이후
var sentence2 = `안녕하세요. 저는 ${word}입니다.`

console.log(sentence) // 안녕하세요. 저는 Son입니다.
console.log(sentence2) // 안녕하세요. 저는 Son입니다.

//////////////////

function func(words, variable1, variable2) {
    console.log(words);
    console.log(variable1);
    console.log(variable2);
    console.log(words[0]);
    console.log(words[1]);
}


// tagged literals: 해체/분석함

// 파라미터1: 문자들을 array화 해줌
// 파라미터2: ${변수}를 뜻함
// 파라미터3: 두 번째 ${변수}를 뜻함
func`안녕하세요 ${word}입니다. ${word}`