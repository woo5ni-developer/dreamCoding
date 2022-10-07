//동등 비교 관계 연산자 (Equality operators)
// == (값이 같음)
// != (값이 다름)
// === (값과 타입이 둘다 같음)
// !== (값과 타입이 다름)

console.log(2 == 2);
console.log(2 != 2);
console.log(2 == '2'); //타입은 다르지만 담고 있는 2는 똑같아서 true 값
console.log(2 === '2'); //타입이 달라서 false //✨
console.log(1 == true);
console.log(1 === true);
console.clear();


const obj1 = {
  name : 'js'
}
const obj2 = {
  name : 'js'
}

console.log(obj1 == obj2); //false
console.log(obj1 === obj2); //false
//안의 내용은 똑같지만 obj1의 메모리 주소와 obj2의 메모리 주소는 다르기 때문에 false!

console.log(obj1.name == obj2.name); //true

let obj3 = obj2; //obj2의 메모리 주소값을 obj3에 할당
console.log(obj3 == obj2); //true
console.log(obj3 === obj2); //true
