import FizzBuzz from "./fizzBuzz.mjs";

describe("fizz", () => {
  it("should fizzbuzzing", () => {
    const fizz = FizzBuzz.fizzBuzz(100);
    expect(fizz.length).toBe(100);
    expect(fizz[2]).toBe("Fizz");
    expect(fizz[4]).toBe("Buzz");
    expect(fizz[14]).toBe("FizzBuzz");
  });
});
