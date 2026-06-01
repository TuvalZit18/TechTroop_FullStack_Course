const reservations = {
  Bob: { claimed: false },
  Ted: { claimed: true },
};

// const name = "Bob";
const name = "Ted";
//const name = "other";
//const name = "TED";
//const name = "BOB";
let keys = Object.keys(reservations);
let user;
for (let i = 0; i < keys.length; i++) {
  if (keys[i].toLocaleLowerCase() === name.toLocaleLowerCase())
    user = Object.keys(reservations)[i];
}
if (reservations[user]) {
  if (reservations[user].claimed) {
    console.log("Hmmm, someone already claimed this reservation");
  } else {
    console.log(`Welcome ${user}`);
  }
} else {
  console.log("YOu have no reservation");
  reservations[name] = { claimed: true };
}
console.log("🚀 ~ reservations:", reservations);
