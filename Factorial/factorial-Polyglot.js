let BigInteger = Java.type('java.math.BigInteger');
function bigJavaFactorial (num) {
  let f = BigInteger.valueOf(1)
  for (let i = 2; i <= num; i++) {
    f = f.multiply(BigInteger.valueOf(i));
  }
  return f.toString();
}

console.log(bigJavaFactorial(2));
console.log(bigJavaFactorial(20));
console.log(bigJavaFactorial(40));
