// 고차함수 Higher-order function
// 인자로 함수를 받거나(콜백함수), 함수를 반환하는 함수를 고차함수라고 한다.
// 입력(input) - callback ==> 출력(output) - function
// 함수형 프로그래밍

const fruits = ['🍌', '🍓', '🍇', '🍓'];
//배열을 빙글 빙글 돌면서 원하는 것(콜백함수)을 할때
fruits.forEach(function(value){
  // console.log(value);
  // console.log(index);
  // console.log(array);
})

fruits.forEach((value, index, array) => console.log(value,index,array));

//조건에 맞는(콜백함수) 아이템을 찾을때
//find: 제일 먼저 조건에 맞는 아이템을 반환
const itme1 = {name:'🥛',price:2};
const itme2 = {name:'🍪',price:3};
const itme3 = {name:'🍙',price:1};
const products = [itme1, itme2, itme3, itme2];
let result = products.find((value)=> value.name === '🍪')
console.log(result);

//findIndex: 제일 먼저 조건에 맞는 아이템의 인덱스를 반환
result = products.findIndex((value)=> value.name === '🍪')
console.log(result);

//배열의 아이템들이 부분적으로 조건(콜백함수)에 맞는지 확인(t/f로 반환)
result = products.some((item) => item.name ==='🍪');
console.log(result);

//배열의 아이템들이 전부 조건(콜백함수)에 맞는지 확인(t/f로 반환)
result = products.every((item) => item.name ==='🍪');
console.log(result);

//조건에 맞는 모든 아이템들을 새로운 배열로 반환!
result = products.filter((item) => item.name ==='🍪');
console.log(result);

console.clear();

//Map 배열의 아이탬들을 각각 다른 아이템으로 매핑할 수 있는, 변환해서 새로운 배열 생성!
const nums = [1,2,3,4,5];
result = nums.map((item) => item*2);
console.log('2배', result);
result = nums.map((item)=>{
  if(item%2 ===0){
    return item*2;
  }else{
    return item;
  }
})
console.log(result);

//Flatmap: 중첩된 배열을 쫘악 펴줌
result = nums.map((item)=>[1,2])
console.log(result);

result = nums.flatMap((item)=>[1,2])
console.log(result);

result = ['dream','coding'].flatMap(text => text.split(''));
console.log(result);


// sort 배열의 아이템들을 정렬
// 문자열 형태의 오름차순으로 요소를 정렬하고, 기존의 배열을 변경!!!
const texts=['hi','abc']
result = texts.sort();
console.log(result);

const numbers = [0,5,4,2,1,10];
numbers.sort();
console.log(numbers);
// < 0 a가 앞으로 정렬, 오름차순
// < 0 b가 앞으로 정렬, 내림차순
numbers.sort((a,b) => a - b)
console.log(numbers);

//reduce 배열의 요소들을 접어서 접어서 값을 하나로!
result = [1,2,3,4,5].reduce((sum, value) => {
  sum += value;
  return sum;
}, 0);
console.log(result);