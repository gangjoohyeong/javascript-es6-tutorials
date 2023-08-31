
// extends, super
// 유사한 클래스를 하나 더 만들기 (상속하기)
class Grandfather {
    constructor(name) {
        this.firstname = 'Kang';
        this.lastname = name;
    }
    sayHi() {
        console.log('안녕 저는 할아버지에요.')
    }
}


var grandfather1 = new Grandfather('gildong');

class Father extends Grandfather {
    constructor(name) {
        super(name);    // 이걸 써야 아래처럼 this를 쓸 수가 있음, 
                        // 이걸 쓰면 위에 grandfather의 this.firstname, this.lastname을 가져옴
        this.age = 50;
    }
    sayHi() {
        console.log('안녕 저는 아버지에요.')
        super.sayHi() // 이게 들어가면 할아버지의 sayHi를 상속 받음
    }
}

var father1 = new Father('minsu');
console.log(father1.lastname); // minsu

console.log(father1.sayHi());