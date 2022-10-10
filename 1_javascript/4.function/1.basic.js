function sum(num1, num2) {
  console.log('function')
  return num1 + num2;
}
const result = sum(1,2);
console.log(result);

//사용예제 2 (반복적인 거를 피하기 위해 함수를 만듬)
// let lastName = '김';
// let firstName = '지수';
// let fullName = `${lastName} ${firstName}`;
// console.log(fullName);

function fullName(firstName,lastName){
  return `${lastName} ${firstName} Hi`;
}
console.log(fullName('이','우원'));

