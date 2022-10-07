//while(조건){ }
//조건이 false가 될때까지 { } 코드를 반복 실행

let num =5 ;
while(num >= 0) {
  console.log(num);
  num--;
}

let isActive = true;
let i = 0;
while(isActive){
  console.log('아직살아있다!');
  if(i === 10){
    break;
  }
  i++
}

// do ~ while 문은 일단 실행하고 나서 조건을 검사함. (한번은 무조건 실행 해야할 때)
do {
  console.log('dd')
}while(isActive);