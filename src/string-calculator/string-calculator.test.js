const { add } = require("./string-calculator");

test("add empty string to equal ''", () => {
  expect(add("")).toBe("");
});

test("add one to equal 1", () => {
  expect(add("1")).toBe(1);
});

test("should return 3 when add string '1,2'", () => {
  expect(add("1,2")).toBe(3);
});
