const textObj = new String('Hello World!');
const text = 'Hello World!';

console.log(textObj);
console.log(text.length);

console.log(text.substring(0,3)); // 문자의 시작, 끝
console.log(text[0]); // H  - 배열의 인덱스로 접근
console.log(text.charAt(0)); // 함수로 접근

console.log(text.indexOf('l')); //첫번째부터 찾은 문자를 반환
console.log(text.lastIndexOf('l')); //뒤에서부터 찾은 문자 반환

console.log(text.includes('tx'));
console.log(text.includes('h')); // 포함되어 있는지(대소문자 구뷴)

console.log(text.startsWith('He')); // He로 시작하는지
console.log(text.endsWith('He')); // 어떤 문자열로 끝나는지

console.log(text.toUpperCase());
console.log(text.toLowerCase());

console.log(text.substring(0,2)); // 2번째 인덱스 이전까지 (0부터 1까지)
console.log(text.slice(2)); // 인덱스 2번부터 잘라진
console.log(text.slice(-2)); // 뒤에서부터

const space = '     space     ';
console.log(space.trim());

const longText = 'Get to the, point'
console.log(longText.split(' ')); //끊어서 반환
console.log(longText.split(',', 2)); //2덩어리만 반환