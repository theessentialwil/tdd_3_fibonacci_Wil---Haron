const { assert } = require("chai");
const fibonacci = require("../fibonacci");

describe("Fibonacci test-first tests", () => {
  it("fibonacci(0) == 0", () => {
    assert.equal(fibonacci(10), 55);
  });
});
