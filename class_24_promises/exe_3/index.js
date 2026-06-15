import { randomUUID } from "crypto";
// Simulated inventory database
const inventory = {
  laptop: { price: 999, stock: 5 },
  mouse: { price: 25, stock: 10 },
  keyboard: { price: 75, stock: 0 }, // Out of stock
  monitor: { price: 299, stock: 3 },
};

// TODO: Return a promise that:
// 1. Waits 500ms (simulating database check)
// 2. Checks if all items are in stock
// 3. Resolves with items if all available
// 4. Rejects with specific item that's out of stock
function checkInventory(items) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      for (const item of items) {
        if (inventory[item].stock === 0)
          return reject(new Error(`${item} out of stock`));
      }
      resolve(items);
    }, 500);
  });
}

// TODO: Return a promise that:
// 1. Waits 200ms
// 2. Calculates total price including 8% tax
// 3. Resolves with { subtotal, tax, total }
function calculateTotal(items) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let subtotal;
      subtotal = items.reduce((sum, item) => (sum += inventory[item].price), 0);
      return resolve({
        subtotal,
        tax: (subtotal * 0.08).toFixed(2),
        total: subtotal * (1.08).toFixed(2),
      });
    }, 200);
  });
}

// TODO: Return a promise that:
// 1. Waits 1500ms (simulating payment processing)
// 2. 90% success rate
// 3. Resolves with { transactionId, amount, status: 'success' }
// 4. Rejects with payment failure error

function processPayment(amount) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() <= 0.9) {
        resolve({
          transactionId: crypto.randomUUID(),
          amount: amount,
          status: "success",
        });
      } else {
        reject(new Error("Payment Failure Error"));
      }
    }, 1500);
  });
}

// TODO: Return a promise that:
// 1. Waits 300ms
// 2. Reduces stock for each item
// 3. Resolves with updated inventory status
function updateInventory(items) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      for (const item of items) inventory[item].stock--;
      const inventoryStauts = Object.fromEntries(
        Object.entries(inventory).map(([key, value]) => [key, value.stock]),
      );
      resolve(inventoryStauts);
    }, 300);
  });
}

// TODO: Create a complete checkout function that:
// 1. Takes an array of item names
// 2. Chains all the above functions
// 3. Returns a promise with the final order result
// 4. Handles all possible errors appropriately
// TODO: Implement the complete checkout flow

function checkout(itemNames) {
  return checkInventory(itemNames)
    .then((items) => calculateTotal(items))
    .then(({ total }) => processPayment(total))
    .then((paymentResult) =>
      updateInventory(itemNames).then((inventoryStatus) => ({
        items: itemNames,
        ...paymentResult,
        inventoryStatus,
      })),
    );
}

// Test cases:
checkout(["laptop", "mouse"]) // Should succeed
  .then((result) => console.log("Order success:", result))
  .catch((error) => console.log("Order failed:", error.message));

checkout(["laptop", "keyboard"]) // Should fail - keyboard out of stock
  .then((result) => console.log("Order success:", result))
  .catch((error) => console.log("Order failed:", error.message));

checkout(["monitor", "mouse", "laptop"]) // Might fail at payment (10% chance)
  .then((result) => console.log("Order success:", result))
  .catch((error) => console.log("Order failed:", error.message));
