// 1
var a = [1,2,3];
var b = '햄버거';
var c = [...b, ...a];
console.log(c); // [ '햄', '버', '거', 1, 2, 3 ]


// 2
var a = [1,2,3];
var b = ['you', 'are'];
var c = function(a, b){
    console.log( [[...a], ...[...b]] )
    console.log( [[...a], ...[...b]][1] )
}
c(a, b); 
// [ [ 1, 2, 3 ], 'you', 'are' ]
// you


// 3
function func(a = 5, b = a * 2 ){
    console.log(a + b);
    return 10
  }
func(3); // 9


// 4
function func2(a = 5, b = a * 2 ){
    console.log(a + b);
  }
func2(undefined, undefined); // 15


// 5
function arr(...rest){
    return rest
}
  
  var newArray = arr(1,2,3,4,5);
  console.log(newArray); 


// 6
var numbers = [2,3,4,5,6,1,3,2,5,5,4,6,7];
console.log(Math.max(...numbers))


// 7 
function sortFunc(rest){
    console.log(...[...rest].sort())
  }
  
sortFunc('bear'); 


// 8
function countWord(word){
    var result = {};
      [...word].forEach(function(a){
         if( result[a] > 0 ){ result[a]++ } else { result[a] = 1 } 
      }); 
    console.log(result)
}

countWord('aacbbb')