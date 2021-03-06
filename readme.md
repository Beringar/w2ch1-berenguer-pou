# Strict Equality comparison function challenge

## (Week 02 CH 1)

### Challenge description:

Our project manager Mario G wants us to:

1. create a function **strictEquals(a,b)** which compares
   strict equality for two values and returns a boolean value
2. this function must return the same boolean value as **a===b**
3. implemetation **cannot use === or !=== comparison operators**
4. use Jest to implement a set of 8 tests (listed in this document)

### Attached files:

strict-equals.test.js (my solution)

strict-equals-throw-exceptions.test.js (just for testing)

### Run tests command

`npm test`

#### Expected outcome:

##### strictEquals(a,b)

Returns same value as a===b in all cases

Jest prints 'This is a Rule exception' for rule exception cases.

##### strictEqualsThrowExceptions(a,b)

Returns same value as a===b
except in cases marked as Rule Exceptions ([NaN], [0,-0], [-0,0])
which throw an exception error.

When values \<A\> and \<B\> are passed to this function
Results have to be as follows \<Result\>

Important: tests have to provide info. for the three
rule exception cases.

| A       | B     | RESULT |                   |
| ------- | ----- | ------ | ----------------- |
| 1       | 1     | true   |                   |
| NaN     | NaN   | false  | // Rule Exception |
| 0       | -0    | true   | // Rule Exception |
| -0      | 0     | true   | // Rule Exception |
| 1       | "1"   | false  |                   |
| true    | false | false  |                   |
| false   | false | true   |                   |
| "Water" | "oil" | false  |
