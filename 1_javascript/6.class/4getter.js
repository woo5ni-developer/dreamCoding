//접근자 프로퍼티 (Accessor Property)
class Student{
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  get fullName() {
    return `${this.lastName} ${this.firstName}`;
  }

  set fullName(value){
    console.log('set', value);
  }
}

const student = new Student('수지','김');
console.log(student.firstName);
console.log(student.fullName); //속성에 가깝기 때문에 함수 호출()를 붙이지 않음.
student.fullName = '김철수'; // 무언가를 할당한다면 set..