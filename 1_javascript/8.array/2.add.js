const fruits = ['🍌', '🍎', '🍇', '🍑'];

// 배열 아이템을 참조하는 방법
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits.length); //배열의 아이템의 갯수


// const fruits = ['🍌', '🍎', '🍇', '🍑'];
// 추가, 삭제 - 좋지 않은 방식 💩 - 인덱세를 지정해서 사용하는 방법
fruits[4] = '🍓';
console.log(fruits);

delete fruits[1];
console.log(fruits); //배열아이템이 사라지지 않고 빈칸으로 남아있음.