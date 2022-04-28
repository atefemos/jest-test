const devid = require("./devid");

test("devide two value", () => {
  expect(devid(10, 3)).toBe(3.33);
});
