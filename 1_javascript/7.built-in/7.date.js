// UTC기준 (협정 세계시, 1970년 1월 1일 UTC 자정과의 시간 차이를 밀리초 단위로 표기)
console.log(new Date());
console.log(new Date('Jun 5, 2022'));

console.log(Date.now());

const now = new Date();
now.setFullYear(2023);
now.setMonth(0); //0이 1월
console.log(now.getFullYear());
console.log(now.getDate());
console.log(now.getMonth());
console.log(now.getDay()); // 0이 일요일~

console.log(now.toString());
console.log(now.toDateString()); // 날짜만 표기
console.log(now.toTimeString());
console.log(now.toLocaleString('en-US'));
console.log(now.toLocaleString('ko-KR'));