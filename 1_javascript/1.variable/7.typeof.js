//typeof:데이터 타입을 확인
//값을 타입 문자열로 반환

let variable;
console.log(typeof variable);

variable = ''; //할당된 값에 따라 타입이 결정됨(동적으로 실행할때 값에 따라 결정)
console.log(typeof variable);

//자바스크립트는 약하게 동적으로 type이 결정됨(dynamic, weakly typed programming language)

variable = {};
console.log(typeof variable);

variable = function (){};
console.log(typeof variable);