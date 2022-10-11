//static 정적 프로퍼티, 메서드
class Fruit {
  static MAX_FRUITS = 4; //만들어진 인스턴스안에는 없음!
  //생성장 : new 키워드로 객체를 생성할때 호출되는 함수
  constructor(name, emoji){
    this.name = name;
    this.emoji = emoji;
  }
  //클래스 레벨의 메서드
  static makeRandomFruit(){
    //클래스 레벨의 메서드에서는 this를 참조할 수 없음
    return new Fruit('banana', '🍌')
  }
  //인스턴스 레벨의 메서드
  display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
}

// console.log(Fruit.name);
// Fruit.display(); // 생성된 인스턴스를 통해서만 호출이 가능하다.

const banana = Fruit.makeRandomFruit();
console.log(banana);
console.log(Fruit.MAX_FRUITS);

// apple은 Fruit 클래스의 인스턴스이다.
const apple = new Fruit('apple','🍎');

// orange는 Fruit 클래스의 인스턴스이다.
const orange = new Fruit('orange','🍎');

console.log(apple);
console.log(apple.name);
console.log(orange);
apple.display();


Math.pow();
Number.isFinite(1);