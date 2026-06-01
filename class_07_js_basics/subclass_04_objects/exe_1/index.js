let p1 = {
  name: "Robert",
  age: "22",
  city: "San Antonio",
};
let p2 = {
  name: "Jill",
  age: "22",
  city: "San Antonio",
};

if (p1.age === p2.age) {
  if (p1.city === p2.city) {
    console.log("Jill wanted to date Robert");
  } else {
    console.log("Jill wanted to date Robert, but couldn't");
  }
} else console.log("Jill does not wanted to date Robert");
