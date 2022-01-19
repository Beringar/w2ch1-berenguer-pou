const strictEquals = ([a, b]) => {
  const ruleExceptionValuePairs = [
    [NaN, NaN],
    [0, -0],
  ];
  for (exceptionPair of ruleExceptionValuePairs) {
    if (exceptionPair.includes(a) && exceptionPair.includes(b)) {
      return !Object.is(a, b);
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
  describe("When it receives NaN as first value and NaN as second value", () => {
    test("Then it is a RULE EXCEPTION and it should return false", () => {
      // Arrange
      const values = [NaN, NaN];
      const expectedResult = true;

      // Act
      const areEqualValues = strictEquals(values);

      // Assert
      expect(areEqualValues).not.toBe(expectedResult);
    });
  });
  describe("When it receives 0 or as first value and -0 or as second value", () => {
    test("Then it is a RULE EXCEPTION and it should return true", () => {
      // Arrange
      const values = [0, -0];
      const expectedResult = false;

      // Act
      const areEqualValues = strictEquals(values);

      // Assert
      expect(areEqualValues).not.toBe(expectedResult);
    });
  });
  describe("When it receives -0 or as first value and 0 or as second value", () => {
    test("Then it is a RULE EXCEPTION and it should return true", () => {
      // Arrange
      const values = [-0, 0];
      const expectedResult = false;

      // Act
      const areEqualValues = strictEquals(values);

      // Assert
      expect(areEqualValues).not.toBe(expectedResult);
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
});
