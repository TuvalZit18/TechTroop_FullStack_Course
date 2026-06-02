const coffeeShop = {
  beans: 40,
  money: 300,

  drinkRequirements: {
    latte: { beansRequirement: 10, price: 20 },
    americano: { beansRequirement: 5, price: 10 },
    doubleShot: { beansRequirement: 15, price: 30 },
    frenchPress: { beansRequirement: 12, price: 24 },
  },
  buyBeans: function (numBeans) {
    this.money -= numBeans * 2;
    this.beans += numBeans;
    console.log(`Thank you for buying ${numBeans}`);
  },

  buyDrink: function (drinkType) {
    if (this.makeDrink(drinkType)) {
      this.money += this.drinkRequirements[drinkType].price;
    }
  },

  makeDrink: function (drinkType) {
    const desiredDrink = Object.keys(this.drinkRequirements).find(
      (drink) => drink === drinkType,
    );
    if (!desiredDrink) {
      console.log(`"Sorry, we don't make ${drinkType}"`);
      return false;
    }
    if (this.drinkRequirements[drinkType].beansRequirement <= this.beans) {
      this.beans -= this.drinkRequirements[drinkType].beansRequirement;
      return true;
    } else {
      console.log("Sorry, we're all out of beans");
      return false;
    }
  },
};

// coffeeShop.makeDrink("latte");
// coffeeShop.makeDrink("americano");
// coffeeShop.makeDrink("filtered"); //should console "Sorry, we don't make filtered"
// coffeeShop.makeDrink("doubleShot");
// coffeeShop.makeDrink("frenchPress"); //should console "Sorry, we're all out of beans"
coffeeShop.buyDrink("frenchPress");
console.log("🚀 ~ coffeeShop.beans:", coffeeShop.money);
