const returnTime = function (time) {
  console.log("The current time is: " + time);
};

const getTime = function (method) {
  method(new Date());
};

getTime(returnTime);
