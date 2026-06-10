import { validate } from ".";
test("//should verify that there is at least one boolean in the array", () => {
  const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const result = validate(input);

  expect(typeof result).toBe("object");
  expect(result).toEqual({ error: "Need at least one boolean" });
});

test("//should return true if there are more trues then false", () => {
  const input = [1, true, 3, true, 5, false, 7, 8, 9, 10];
  const result = validate(input);

  const input2 = [1, 2, 3, true, 5, false, 7, 8, 9, 10];
  const result2 = validate(input2);

  expect(typeof result).toBe("boolean");
  expect(result).toBe(true);

  expect(typeof result2).toBe("boolean");
  expect(result2).toBe(false);
});
