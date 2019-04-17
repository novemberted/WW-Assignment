function generate500RandomNumbers() {
  return Array.apply(null, Array(500)).map(function() {
    return Math.random() * 10000;
  });
}

function nthSmallest(n, input) {
  //sprt the input first in an ascending order
  let sortedInput = input.sort(function(a, b) {
    return a - b;
  });
  return sortedInput[n - 1];
}

//test it out to find the 3rd smallest number
console.log(nthSmallest(3, generate500RandomNumbers()));
