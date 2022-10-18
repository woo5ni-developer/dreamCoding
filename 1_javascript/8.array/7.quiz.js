// quiz1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['🍌','🍓','🍇','🍓']
// output: ['🍌','🥝','🍇','🥝']


function replace(array, from, to){
  // let newArray = Array.from(array);
  // return array.map((item) => {
  //   return item === from ? to : item;
  // })
  return array.map((item)=> item===from ? to : item); //그냥 return이 되면 생략이 가능하니깐 줄여서 작성 가능
}
const array = ['🍌','🍓','🍇','🍓'];
const result1 = replace(array, '🍓', '🥝');
console.log(result1);


// quiz2:
// 배열과 특정한 요소를 전달받아,
// 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input: [ '🍌', '🥝', '🍇', '🥝' ], '🥝'
// output: 2

const array2 = [ '🍌', '🥝', '🍇', '🥝' ];
function countFun(array, item) {
  return array.filter((value) => item === value).length
}
console.log(countFun(array2, '🥝'));
// ***조건에 맞는 모든 아이템들을 새로운 배열로 변환할때 : filter
// ***배열에 아이템들을 다른 아이템으로 매핑해서 새로운 배열로 변환할때 : map


//quiz3
//배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
//input: ['🍌','🥝','🍇'], ['🍌','🍓','🍇','🍓']
//output: ['🍌', '🍇']

const array3 = ['🍌','🥝','🍇'];
const array4 = ['🍌','🍓','🍇','🍓']
function compare(array1, array2){
  return array3.filter((value) => array4.includes(value));
}
console.log(compare(array3,array4));


// quiz4
// 5이상(보다 큰)의 숫자들의 평균
const nums = [3,16,5,25,4,34,21];
let result4 = nums //
  .filter((num) => num>5 ) //[16,25,34,21]
  .reduce((avg,num, _, array) => avg + num/array.length, 0);
console.log(result4);
