
var pants = 20;
var socks = 100;

`Pants${pants} Socks${socks}`;

// 양말과 바지 단어 순서를 바꿔보기
function func(words, variable1, variable2) {
    console.log(words[1] + variable1 + words[0] + variable2)
}

func`Pants${pants} Socks${socks}`;


// pants가 0개이면, 'Pants 안 팔아요 Socks 100' 이라는 문자로 바꾸기

function func2(words, variable1, variable2) {
    if (variable1 == 0) {
        console.log(`Pants 안 팔아요 Socks ${variable2}`);
    } else {
        console.log(words[1] + variable1 + words[0] + variable2);
    }
    
}
var pants = 0;
var socks = 100;

func2`Pants${pants} Socks${socks}`;
