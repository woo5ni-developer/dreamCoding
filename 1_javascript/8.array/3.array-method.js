// 배열의 함수들
// 배열 자체를 변경하는지, 새로운 배열을 반환하는지

const fruits = ['🍌', '🍎', '🍇'];

//특정한 오브젝트가 배열인지 체크
console.log(Array.isArray(fruits)); //배열인지 아닌지
console.log(Array.isArray({}));

//특정한 아이템의 위치를 찾을때
console.log(fruits.indexOf('🍌'));

//배열안에 특정한 아이템이 있는지 체크
console.log(fruits.includes('🍌'));

// 추가 - 제일 뒤
let length = fruits.push('🍓'); //배열 자체를 수정 혹은 업데이트 해주는 함수
console.log(fruits);

//추가 - 맨 앞
fruits.unshift('🍑');
console.log(fruits);

//제거 - 제일 뒤
let lastItem = fruits.pop(); //배열 자체를 수정
console.log(fruits);

//제거 - 제일 앞
fruits.shift();
console.log(fruits);

// 중간에 추가 또는 삭제
const deleted = fruits.splice(1, 1);
console.log(fruits);
console.log(deleted); //배열 형태
fruits.splice(1,0, '🍎', '🍊'); //배열 첫번째 인덱스 아이템에서 삭제하지 않고 그자리에 사과 아이템을 추가
console.log(fruits);

// 잘라진 새로운 배열을 만듬
let newArr = fruits.slice(0,2); // 0부터 2번째(제외)까지의 배열 즉 0,1 //기존의 배열은 그대로 두고 잘라진 배열을 리턴함.
console.log('이전꺼', newArr);
console.log('이전꺼',fruits);

newArr = fruits.slice(1); //1부터 끝까지 반환, -1은 뒤에서 첫번째 반환
console.log('newArr', newArr);
console.log(fruits);

//여러 배열을 붙여줌 - concat
const arr1 = [1,2,3];
const arr2 = [4,5,6];
const arr3 = arr1.concat(arr2);
console.log(arr1);
console.log(arr2);
console.log(arr3);

// 순서를 거꾸로
const arr4 = arr3.reverse();
console.log(arr4);
console.clear();

// 중첩 배열을 하나의 배열로 쫙 펴기
let arr = [
  [1,2,3],
  [4, [5,6,[3,4]]],
];
console.log(arr);
console.log(arr.flat(3)); //기본은 한단계 중첩 배열만 풀어줌
arr = arr.flat(3);


//특정한 값으로 배열을 채우기
arr.fill(0); //배열 자체를 수정
console.log(arr);

arr.fill('s', 1, 3);
console.log(arr);

arr.fill('a', 1);
console.log(arr);

//배열을 문자열로 합하기
let text = arr.join();
console.log(text);

text = arr.join(' | ');
console.log(text);