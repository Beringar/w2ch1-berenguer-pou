const strictEquals = ([a, b]) => {
  const ruleExceptionValuePairs = [
    [NaN, NaN],
    [0, -0],
  ];
  for (exceptionPair of ruleExceptionValuePairs) {
    if (exceptionPair.includes(a) && exceptionPair.includes(b)) {
      throw new Error(
        `ERROR: Perform Strict equality on these two values is a Rule Exception!`
      );
    }
  }
  return Object.is(a, b);
};

// Tests

describe("Given a strictEquals function", () => {
  describe("When it receives 1 as first value and 1 as second value", () => {
    test("Then it should return true", () => {
      // Arrange
      const values = [1, 1];
      const expectedResult = true;

      // Act
      const areEqualValues = strictEquals(values);

      // Assert
      expect(areEqualValues).toBe(expectedResult);
    });
  });
  describe("When it receives 1 as first value and '1' as second value", () => {
    test("Then it should return false", () => {
      // Arrange
      const values = [1, "1"];
      const expectedResult = false;

      // Act
      const areEqualValues = strictEquals(values);

      // Assert
      expect(areEqualValues).toBe(expectedResult);
    });
  });
  describe("When it receives true as first value and false as second value", () => {
    test("Then it should return false", () => {
      // Arrange
      const values = [true, false];
      const expectedResult = false;

      // Act
      const areEqualValues = strictEquals(values);

      // Assert
      expect(areEqualValues).toBe(expectedResult);
    });
  });
  describe("When it receives false as first value and false as second value", () => {
    test("Then it should return true", () => {
      // Arrange
      const values = [false, false];
      const expectedResult = true;

      // Act
      const areEqualValues = strictEquals(values);

      // Assert
      expect(areEqualValues).toBe(expectedResult);
    });
  });
  describe("When it receives 'Water' as first value and 'oil' as second value", () => {
    test("Then it should return false", () => {
      // Arrange
      const values = ["Water", "oil"];
      const expectedResult = false;

      // Act
      const areEqualValues = strictEquals(values);

      // Assert
      expect(areEqualValues).toBe(expectedResult);
    });
  });
  describe("When it receives NaN as first value and NaN as second value", () => {
    test("Then it should throw an error with the message: 'ERROR: Perform Strict equality on these two values is a Rule Exception!'", () => {
      // Arrange
      const values = [NaN, NaN];
      const errorMessage =
        "ERROR: Perform Strict equality on these two values is a Rule Exception!";

      // Act

      // Assert
      expect(() => {
        strictEquals(values);
      }).toThrow(errorMessage);
    });
  });
});
