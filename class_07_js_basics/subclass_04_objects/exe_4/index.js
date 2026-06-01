const date = 3;

const kitchen = {
  owner: "Geraldine",
  hasOven: true, // choose one
  fridge: {
    price: 500,
    works: false, // choose one
    items: [
      { name: "cheese", expiryDate: 7 },
      { name: "radish", expiryDate: 2 },
      { name: "bread", expiryDate: 1 },
    ],
  },
};

let owner = kitchen.owner;
let hasOven = kitchen.hasOven;
let works = kitchen.fridge.works;
let items = kitchen.fridge.items;
let item = items.find((item) => item.name === "radish");
let item_name = item.name;
let item_expiry = item.expiryDate;
let expired = date - item_expiry;
let price = kitchen.fridge.price;

let intro_text = `${owner}'s ${item_name} `;

let expiring_text;
if (expired > 0) expiring_text = `expired ${expired} day ago.`;
else {
  if (expired < 0 && expired === -1) {
    expiring_text = `will be expired in ${expired * -1} day.`;
  } else if (expired < 0 && expired < -1)
    expiring_text = `will be expired in ${expired * -1} days.`;
  else {
    expiring_text = `will be expired today`;
  }
}

let fridge_text = works
  ? " Weird, considering her fridge works."
  : " Probably because her fridge doesn't work.";

let oven_text = hasOven
  ? "Luckily, she has an oven to cook the radish in."
  : `Too bad she doesn't have an oven to cook the ${item_name} in.`;

let payment_text = works
  ? ""
  : `And she'll have to pay ${price / 2} to fix the fridge`;

console.log(
  intro_text + expiring_text + fridge_text + oven_text + payment_text,
);
