function bigFactorial (num) {
  let f = 1n;
  for (let i = 2; i <= num; i++) {
    f = f * BigInt(i);
  }
  return f;
}

console.log(bigFactorial(20));
console.log(bigFactorial(100));
console.log(bigFactorial(200));
console.log(bigFactorial(300));
console.log(bigFactorial(600));
