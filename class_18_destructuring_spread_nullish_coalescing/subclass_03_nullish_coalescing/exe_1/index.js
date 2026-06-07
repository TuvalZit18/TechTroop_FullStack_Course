let employeesArr = [
  { name: "Joey", id: 1, age: 26 },
  { name: "Lily", id: null, age: 24 },
  { name: "Alice", id: 7, age: null },
  { name: "Sam", id: 8, age: 24 },
  { name: "Ray", id: null, age: null },
];

for (const employee of employeesArr) {
  let age = employee?.age ?? "Missing";
  let id = employee?.id ?? "Missing";

  if (age === "Missing" || id === "Missing")
    console.log(`${employee.name} has missing data`);
}
