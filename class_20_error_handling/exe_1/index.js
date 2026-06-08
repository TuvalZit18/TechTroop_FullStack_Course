const safeJSONParser = function (str) {
  try {
    return JSON.parse(str);
  } catch (error) {
    return "Invalid JSON format";
  }
};

console.log(safeJSONParser('{"name": "John"}'));
console.log(safeJSONParser("invalid json"));
