const sum = require("../sum");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("adds 2 + 2 to equal 4", () => {
  expect(sum(2, 2)).toBe(4);
});

test("adds 11 + 2 to equal 13", () => {
  expect(sum(11, 2)).toBe(13);
});

test("adds 23 + -1 to equal 22", () => {
  expect(sum(23, -1)).toBe(22);
});

test("adds 11 + 0 to equal 11", () => {
  expect(sum(11, 0)).toBe(11);
});
