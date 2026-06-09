//should remove at least one element from the array `arr`
export const simplify = (str) => {
  let symbols = ["!", "#", ".", ",", "'"];
  return str
    .split("")
    .filter((c) => symbols.indexOf(c) == -1)
    .join("");
};
