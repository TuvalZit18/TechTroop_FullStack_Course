import { simplify } from ".";
test("//should remove special characters from string", () => {
  const input = "!#.,'";
  const result = simplify(input);

  const input2 = "123!#.,'123";
  const result2 = simplify(input2);
  expect(result2.length).toBe(6);
});
