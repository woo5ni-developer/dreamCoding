// class Tiger {
//   constructor(color) {
//     this.color = color;
//   }
//   eat(){
//     console.log('먹자!')
//   }
//   sleep(){
//     console.log('잔다')
//   }
// }

// class Dog {
//   constructor(color) {
//     this.color = color;
//   }
//   eat(){
//     console.log('먹자!')
//   }
//   sleep(){
//     console.log('잔다')
//   }
//   play(){
//     console.log('놀자');
//   }
// }

class Animal {
  constructor(color) {
    this.color = color;
  }
  eat(){
    console.log('먹자!')
  }
  sleep(){
    console.log('잔다')
  }
}

class Tiger extends Animal {} // tiger라는 class에 animal이라는 class 상속받아옴

const tiger = new Tiger('노랑이');
console.log(tiger);
tiger.eat();
tiger.sleep();

class Dog extends Animal {
  constructor(color, ownerName){
    super(color); //super -> 상속하고 있는 부모(Animal) 클래스를 가르킴
    this.ownerName = ownerName;
  }
  //자식에서 필요한게 있다면 아래와 같이 추가
  play(){
    console.log('놀자');
  }
  //부모의 행동을 내껄로 덮어씌움(overriding)
  eat(){
    super.eat(); // 부모(Animal)의 행동을 받아온후 아래 내가 필요한 기능을 구현.
    console.log('강아지가 먹는다');
  }
}
const dog = new Dog('빨강이', 'woowon');
console.log(dog);
dog.play();
dog.eat();
