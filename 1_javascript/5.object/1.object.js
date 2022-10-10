// Object literal { key:value }
// new Object()
// Object.create();
// key - 문자, 숫자, 문자열, 심볼
// value - 원시값, 객체 (함수)

let apple = {
  name: 'apple', //주로 이렇게 사용
  'hello-bye':'✋🏻',
  0:1,
  ['hello-bye1']:'✋🏻'
}

//속성, 데이터에 접근하기 위해서는 key.value
apple.name; // 마침표 표기법 dot notation
console.log(apple['hello-bye']) //대괄호 표기법 bracket notation
apple['name'];

// 속성 추가
apple.emoji = '🍎'
console.log(apple.emoji);
console.log(apple['emoji']);
console.log(apple);

//속성 삭제
delete apple.emoji;
console.log(apple);