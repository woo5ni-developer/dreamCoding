//let 재할당이 가능
let a = 1;
a = 2;

//const 재할당이 불가능
/**
  1.상수
  2.상수변수 또는 변수
 */

const text = 'hello';
// text = 'hi'; 이렇게 하면 안됨!

//1. 상수
const MAX_FRUITS = 5;

//2. 재할당 불가능한 상수변수 또는 변수
const apple = {
  name:'apple',
  color:'red',
  display:'🍎'
};

apple.name = 'orange'
console.log(apple);
//const는 재할당은 불가능하지만 객체 안에 있는 value값은 변경가능!!
//let 보다는 const로 작성!