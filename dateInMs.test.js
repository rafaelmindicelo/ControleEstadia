const { expect } = require("@jest/globals");
const dateInMs = require("./controleEstadia");

test('retornar data/hora em ms', () => {
  const data = "20/01/2022 10:01:30";
  const expectedDataInMs = 1642683690000;

  expect(dateInMs(data)).toBe(expectedDataInMs);
})