const subtract = require("./subtract");

test("properly subtracting two number", () => {
  expect(subtract(1, 2)).toBe(-1);
});
