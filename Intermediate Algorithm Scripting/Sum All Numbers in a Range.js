/* Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.
sumAll([1, 4]); 

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
*/

function sumAll(arr) {
  arr.sort(function (a, b) {
    return a - b;
  });
  var sum = 0;
  for (var i = arr[0]; i <= arr[1]; i++) {
    sum += i;
  }
  return sum;
}


