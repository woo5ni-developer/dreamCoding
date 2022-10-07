//논리연산자 Logical operator
//&& 그리고
//|| 또는
// ! 부정(단항연산에서 온것)
// !! 불리언값으로 변환(단항연산자 응용버전)

let num = 9;
if(num >= 0 || num < 9) {
  console.log('굿')
}
if(num !=8){
  console.log('굿굿')
}

console.log(true && true); //true
console.log(true && false); //false
console.log(false && true); //false
console.log(false && false); //false

console.log(!'text'); //false
console.log(!!'text'); //true
