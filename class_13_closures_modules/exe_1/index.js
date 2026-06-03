const StringFormatter = function () {
  const capitalizeFirst = function (str) {
    return str[0].toUpperCase() + str.slice(1);
  };
  const toSkewerCase = function (str) {
    return str.replaceAll(" ", "-");
  };
  return {
    capitalizeFirst,
    toSkewerCase,
  };
};
const formatter = StringFormatter();

formatter.capitalizeFirst("dorothy"); //should return Dorothy
console.log(
  `🚀 ~ formatter.capitalizeFirst("dorothy"):`,
  formatter.capitalizeFirst("dorothy"),
);
formatter.toSkewerCase("blue box"); //should return blue-box
console.log(
  `🚀 ~ formatter.toSkewerCase("blue box"):`,
  formatter.toSkewerCase("blue box"),
);
