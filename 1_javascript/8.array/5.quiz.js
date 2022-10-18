// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['🍌','🍓','🍇','🍓']
// output: ['🍌','🥝','🍇','🥝']

function replace(array, from, to) {
  const replaced = Array.from(array);
  for (let i = 0; i< replaced.length; i++){
    if(replaced[i] === from){
      replaced[i] = to;
    }
  }
  return replaced;
}
const array = ['🍌','🍓','🍇','🍓'];
const resultArray = replace(array,'🍓','🥝')
console.log(resultArray);




//퀴즈2:
//배열과 특정한 요소를 전달받아,
//배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
//input: ['🍌','🥝','🍇','🥝'], '🥝'
//output: 2

const arr = ['🍌','🥝','🍇','🥝'];
let count = arr.filter(element => element === '🥝').length;
console.log(count)

//풀이
function countFun(array, item) {
  let counter = 0;
  for (let i=0; i<array.length; i++){
    if(array[i] === item){
      counter++;
    }
  }
  return counter
}
console.log(countFun(['🍌','🥝','🍇','🥝'], '🥝'));


//퀴즈3
//배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
//input: ['🍌','🥝','🍇'], ['🍌','🍓','🍇','🍓']
//output: ['🍌', '🍇']

const arr1 = ['🍌','🥝','🍇']
const arr2 = ['🍌','🍓','🍇','🍓']
let compareArray = arr1.filter(el => arr2.includes(el));
console.log(compareArray);


//풀이
function compare(array1, array2){
  const result = [];
  for(let i=0; i<array1.length; i++){
    if(array2.includes(array1[i])){
      result.push(array1[i])
    }
  }
  return result;
}
console.log(compare(['🍌','🥝','🍇'],['🍌','🍓','🍇','🍓']));