const sum = require('./index');

describe('sum', () => {
  // Tests that summing two positive numbers returns the correct result
  it("test_sum_positive_numbers", () => {
    expect(sum(2, 3)).toBe(5);
    expect(sum(10, 5)).toBe(15);
  });

  // Tests that summing zero with any number returns the same number
  it("test_sum_zero", () => {
    expect(sum(0, 5)).toBe(5);
    expect(sum(0, -10)).toBe(-10);
  });

  // Tests that summing two opposite numbers returns zero
  it("test_sum_opposite_numbers", () => {
    expect(sum(5, -5)).toBe(0);
    expect(sum(-10, 10)).toBe(0);
  });

  // Tests that summing Infinity with any number returns Infinity
  it("test_sum_infinity", () => {
    expect(sum(Infinity, 5)).toBe(Infinity);
    expect(sum(-Infinity, 10)).toBe(-Infinity);
  });

  // Tests that summing NaN with any number returns NaN
  it("test_sum_nan", () => {
    expect(sum(NaN, 5)).toBe(NaN);
    expect(sum(NaN, NaN)).toBe(NaN);
  });

  it("test_sum_string", () => {
    expect(sum(5, "5")).toBe("55");
    expect(sum(-10, "5")).toBe("-105");
  });
});