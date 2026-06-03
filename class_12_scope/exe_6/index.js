const isEnough = false;

const makeEnough = function () {
  for (let i = 0; i < 10; i++) {
    if (i > 5) {
      isEnough = true;
    }
  }
};

makeEnough();
if (isEnough) {
  console.log("Finally, sheesh");
} else {
  console.log("Here we go again...");
}
