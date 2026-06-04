class Company {
  constructor() {
    this.employees = {
      ax01: {
        name: "Ray",
        age: 28,
        salary: 1300,
      },
      qs84: {
        name: "Lucius",
        age: 31,
        salary: 840,
      },
      bg33: {
        name: "Taylor",
        age: 18,
        salary: 2700,
      },
    };
  }
  findEmployeeSalary(employeeID) {
    return this.employees[employeeID].salary;
  }
}
const comp = new Company();
console.log(comp.findEmployeeSalary("ax01"));
console.log(comp.findEmployeeSalary("qs84"));
console.log(comp.findEmployeeSalary("bg33"));
