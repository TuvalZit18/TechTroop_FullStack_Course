import Matrix from "./Matrix.js";

class EmployeeMatrix extends Matrix {
  constructor() {
    super();
  }
  loadData(data) {
    this.matrix = data.map((employee) => Object.values(employee));
  }
  getEmployees(department) {
    let filterEmployees = this.matrix.filter(
      (employee) => employee[2] === department,
    );
    return this._getEmployeesOfDepartment(department).map(
      (employee) => employee[1],
    );
  }
  _getEmployeesOfDepartment(department) {
    return this.matrix.filter((employee) => employee[2] === department);
  }
  getTotalSalary(department) {
    return this._getEmployeesOfDepartment(department).reduce(
      (totalSalary, employee) => {
        totalSalary += employee[3];
        return totalSalary;
      },
      0,
    );
  }
  findRichest() {
    const richestEmp = this.matrix.reduce((richest, employee) => {
      richest = employee[3] > richest[3] ? employee : richest;
      return richest;
    }, this.matrix[0]);
    return richestEmp[1];
  }
}

export default EmployeeMatrix;

let data = [
  { _id: "e10021", name: "Gillian", department: "Finance", salary: 2000 },
  { _id: "e10725", name: "Tibor", department: "Design", salary: 1200 },
  { _id: "e10041", name: "Anisha", department: "Finance", salary: 2300 },
  { _id: "e10411", name: "Jakub", department: "Design", salary: 1600 },
  { _id: "e11995", name: "Mar", department: "Design", salary: 1300 },
  { _id: "e10732", name: "Nisha", department: "Design", salary: 1200 },
];

let m = new EmployeeMatrix();

m.loadData(data);

console.log(m.getEmployees("Finance")); //prints [ 'Gillian', 'Anisha' ]
console.log(m.getEmployees("Design")); //prints [ 'Tibor', 'Jakub', 'Mar', 'Nisha' ]

console.log(m.getTotalSalary("Finance")); //prints 4300
console.log(m.getTotalSalary("Design")); //prints 5300
console.log(m.findRichest()); //prints Anisha
