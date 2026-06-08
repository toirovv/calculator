const myCalculator = (son1, son2, operator) => {
  if (operator === "- ") {
    return son1 - son2;
  } else if (operator === "+") {
    return son1 + son2;
  } else if (operator === "/") {
    return son1 / son2;
  } else if (operator === "*") {
    return son1 * son2;
  } else {
    return " xato";
  }
};
console.log(myCalculator(10, 5, "+"));
console.log(myCalculator(10, 5, "-"));
console.log(myCalculator(10, 5, "/"));
console.log(myCalculator(10, 5, "*"));
