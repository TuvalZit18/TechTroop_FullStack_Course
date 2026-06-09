//should remove at least one element from the array `arr`
export const removeAtLeastOne = (arr) => {
  let numItemsToRemove = Math.floor(Math.random() * (arr.length - 1)) + 1;
  arr.splice(0, numItemsToRemove);
  return arr;
};
