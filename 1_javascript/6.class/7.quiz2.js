// 정직원과 파트타임직원을 나타낼 수 있는 클래스를 만들어 보자
// 직원들의 정보: 이름, 부서이름, 한달 근무 시간
// 매달 직원들의 정보를 이용해서 한달 월급을 계산할 수 있다
// 정직원은 시간당 10000원
// 파트타임 직원은 시간당 8000원

class Employee {
  #name;
  #department;
  constructor(name, department, hoursPerMonth, payRate){
    this.#name = name;
    this.#department = department;
    this.hoursPerMonth = hoursPerMonth;
    this.payRate = payRate;
  }
  get value() {
    return this.hoursPerMonth;
  }
  calculatePay = () => {
    return this.hoursPerMonth * this.payRate;
  }
}

class FullTimeEmployee extends Employee{
  static PAY_RATE = 10000;
  constructor(name, department, hoursPerMonth, payRate){
    super(name, department, hoursPerMonth, FullTimeEmployee.PAY_RATE);
  }
}

class PartTimeEmployee extends Employee {
  static PAY_RATE = 8000;
  constructor(name, department, hoursPerMonth, payRate){
    super(name, department, hoursPerMonth, PartTimeEmployee.PAY_RATE);
  }
}

const ww = new FullTimeEmployee('우원','s/w',30);
const dj = new PartTimeEmployee('두준','s/w',20)
console.log(ww.calculatePay());
console.log(dj.calculatePay());