//증가 & 감소 연산자 Increment & Decrement Operators
let a = 0;
console.log(a);

a = a + 1;
a++; // a = a+1; a+=1;
a--; // a = a-1; a-=1;
console.log(a);
console.clear();



// 주의!
// a++ 필요한 연산을 하고, 그 뒤 값을 증가시킴
// ++a 값을 먼저 증가하고, 필요한 연산을 함
a = 0;
let b = a++;
console.log(b);
console.log(a);
/**
  할당연산을 먼저 실행후, 증가시킨다 그러므로 0인 a값을 b에 먼저 할당한 후 a의 값을 1증가시킴.
  그래서 b의 값은 0, a의 값은 1이 된다.
 *
*/



