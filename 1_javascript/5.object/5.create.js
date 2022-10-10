// const apple = {
//   name: 'apple',
//   display: function(){
//     console.log(`${this.name}: 🍎`);
//   }
// }

// const orange = {
//   name: 'apple',
//   display: function(){
//     console.log(`${this.name}: 🍊`);
//   }
// }

//생성자 함수(함수이름 대문자!)
function Fruit(name, emoji) {
  this.name = name;
  this.emoji = emoji;
  this.display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  }
}

const apple = new Fruit('apple','🍎');
const orange = new Fruit('orange','🍎');

console.log(apple);
console.log(apple.name);
console.log(orange);
apple.display();
