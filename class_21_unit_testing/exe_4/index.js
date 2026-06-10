//should remove at least one element from the array `arr`
export const validate = (arr) => {
  let countTrue = 0;
  let countFalse = 0;
  for (const element of arr) {
    if (typeof element === "boolean") {
      element === true ? countTrue++ : countFalse++;
    }
  }
  if (countTrue === 0 && countFalse === 0)
    return { error: "Need at least one boolean" };
  return countTrue > countFalse;
};
