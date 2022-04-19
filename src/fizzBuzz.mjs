import times from "lodash/times.js";

const fizzBuzz = (num) => {
  const lala = times(num, (i) => {
      const numberToCheck = i +1;
    if (numberToCheck % 15 === 0) {
      return "FizzBuzz";
    } else if (numberToCheck % 5 === 0) {
      return "Buzz";
    } else if (numberToCheck % 3 === 0) {
      return "Fizz";
    }
    return numberToCheck;
  });

  return lala;
};

const FizzBuzz = {
  fizzBuzz,
};
export default FizzBuzz;
