Our project manager Mario G wants us to describe
a set of tests with Jest for a particular function

`strictEquals`  
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
