const { assert } = require("chai");
const fibonacci = require("../fibonacci");

describe("Fibonacci test-first tests", () => {
  it("fibonacci(0) == 0", () => {
    assert.equal(fibonacci(0), 0);
  });

  it("fibonacci(2) == 1", () => {
    assert.equal(fibonacci(2), 1);
  });

  it("fibonacci(3) == 2", () => {
    assert.equal(fibonacci(3), 2);
  });

  it("fibonacci(-3) == Error", () => {
    assert.equal(fibonacci(-3), Error);
  });
});
