/**
 * 1.단일 데이터(원시) - number, string, boolean, null, undefined, Symbol
 * 2.복합 데이터(object) - object(array), function
 */

//1. number
let integer = 123; //정수
let negative = -123; //음수
let double = 1.23; //실수

console.log(integer);
console.log(negative);
console.log(double);

console.log(0/123); //0
console.log(123/0); //infinity
console.log(123/-0); //-infinity
console.log(123/'text'); //NaN (Not a Number)


//2. string(문자열타입)
let string = '안녕하세요';
string = `안녕!`;
console.log(string);
string = '"안녕하세요"';
console.log(string);

//특수 문자 출력하는법
string = "'안녕!'";
console.log(string);
string = '안녕! \n엘리야!\t\t 내 이름은\\\u09Ac'; //줄바꿈, 띄어쓰기, 유니코드(이스케이프 표현)
console.log(string);

//템플릿 리터럴 (``)백틱 사용
let id = '엘리';
let greetings = `'안녕 ${id} ✋🏻
즐거운 하루 보내요!'`;
console.log(greetings);


//3. 불리언타입 boolean(True/False)
let 참 = true;
let 거짓 = false;

//활용 예시
let isFree = true;
let isActivated = false;
let isEntrolled = true;

//Falshy 거짓인 값
console.log(!!0); //true인지 false인지 알려주는 느낌표두개!
console.log(!!-0);
console.log(!!''); //비어있는 문자열
//Truthy 참인 값
console.log(!!1);
console.log(!!{}); //비어있는 객체
console.log(!![]); //비어있는 배열
console.log(!!'text');


//4. Null, undefined
let variable; //값이 아직 정해져 있는 않은 상태 - 아직 있는지 없는지 모르는 상태
console.log(variable);

variable = null; //값을 명시적으로 Null로 할당 - 값이 없다는 것을 의미(없는 상태)
console.log(variable);

console.log(typeof null); //object
console.log(typeof undefined);