//카운터를 만들기
/**
 * 0 이상의 값으로 초기화 한 뒤 하나씩 숫자를 증가할 수 있는 카운터를 만들기
 */

class Counter{
  #value; //외부에서 접근이 불가능한 private
  constructor(startValue){
    if(isNaN(startValue) || startValue < 0){
      this.#value = 0; //외부에서 접근이 불가능한 private
    } else{
      this.#value = startValue;
    }
  }
  get value(){
    return this.#value;
  }
  increment(){
    this.#value++;
  }
}

const counter = new Counter(2);
counter.increment();
counter.increment();
console.log(counter.value);
