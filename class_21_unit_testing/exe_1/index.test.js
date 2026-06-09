import { isEven } from ".";
test("isEven should return if number is even", () => {
  let result1 = isEven(4);
  let result2 = isEven(5);
  expect(result1).toBe(true);
  expect(result2).toBe(false);
});
