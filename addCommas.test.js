const {addCommas} = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
    expect(addCommas(123456789)).toEqual('123,456,789')
  });
});
