function add(a,b){
  return a + b;
}
const sum = add;

console.log(add(1,2), sum(1,2));
//함수이름을 어딘가에 할당한다는 것은 함수 가르키고 있는 메모리 주소를 복사한다는 것과 같다!!!!!