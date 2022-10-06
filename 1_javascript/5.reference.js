//원시타입은 값!!!!이 복사되어 전달됨
let a = 1;
let b = a; //1
b = 2;

console.log(a);
console.log(b);

//객체타입은 참조값(메모리주소, 레퍼런스)가 복사되어 전달됨
let apple = { //0x1234(동일한 주소,메모리 주소가 복사됨)
  name:'apple'
}
let orange = apple; //0x1234(동일한 주소 복사)

console.log(orange);
apple.name = 'orange';

console.log(orange);
console.log(apple);