import { add } from ".";
import { jest } from "@jest/globals";

test("//should add new value to the array", () => {
  const pushSpy = jest.spyOn(Array.prototype, "push");

  add(1, 2);
  expect(pushSpy).toHaveBeenCalled();
  expect(pushSpy).toHaveBeenCalledWith(1, 2);
  pushSpy.mockRestore();
});
