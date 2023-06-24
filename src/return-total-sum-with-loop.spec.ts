import returnTotalSum from "./return-total-sum-with-loop";

test("return total sum of all numbers in an array of numbers and strings", () => {
    expect(returnTotalSum(["old", 10, 20, "pond", -5, -3])).toBe(22);
  });

  test("return total sum of an array of only strings", () => {
    expect(returnTotalSum(["1", "2", "3"])).toBe(0);
  });

  test("return total sum of an empty array", () => {
    expect(returnTotalSum([])).toBe(0);
  });