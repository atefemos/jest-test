const sum = require("./sum");

test("properly adds two number", () => {
  expect(sum.sum(1, 2)).toBe(3);
});

test("include H", () => {
  expect(sum.foo()).not.toBeNull();
  expect(sum.foo()).toMatch(/h/);
});
