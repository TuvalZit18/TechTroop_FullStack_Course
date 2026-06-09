import { removeAtLeastOne } from ".";
test("//should remove at least one element from the array", () => {
  const input = [1, 2, 3, 4, 5];
  const result = removeAtLeastOne([...input]);

  expect(result.length).toBeLessThan(input.length);
  expect(result.length).toBeGreaterThanOrEqual(1);
});
