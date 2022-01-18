const strictEquals = ([a, b]) => Object.is(a, b);

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
});
