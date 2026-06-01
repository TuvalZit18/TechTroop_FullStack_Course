let customerType = "premium";
let purchaseAmount = 150;
let dayOfWeek = 6; // 0 = Sunday, 1 = Monday, et

let amount_after_discount = purchaseAmount;
if (customerType === "vip") amount_after_discount = purchaseAmount * 0.8;
else {
  if (customerType === "premium") {
    if (dayOfWeek >= 5) //Weekend
    {
      amount_after_discount = purchaseAmount * 0.85;
    } else amount_after_discount = purchaseAmount * 0.9;
  } else {
    if (purchaseAmount > 100) amount_after_discount = purchaseAmount * 0.9;
    else if (purchaseAmount > 50) amount_after_discount = purchaseAmount * 0.95;
  }
}
console.log("🚀 ~ amount_after_discount:", amount_after_discount);
