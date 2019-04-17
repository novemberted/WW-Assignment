function generate500RandomNumbers() {
  return Array.apply(null, Array(500)).map(function() {
    return Math.random() * 10000;
  });
}

function nthSmallest(n, input) {
  let sortedInput = input.sort(function(a, b) {
    return a - b;
  });
  return sortedInput[n - 1];
}

console.log(nthSmallest(3, generate500RandomNumbers()));
