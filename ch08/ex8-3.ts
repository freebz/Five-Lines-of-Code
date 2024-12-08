// 예제 8.3 주석 처리한 코드

const PHI = (1 + Math.sqrt(5)) / 2;
const PHI_ = (1 - Math.sqrt(5)) / 2;
const C = 1 / Math.sqrt(5);

function fib(n: number) {
  // if(n <= 1) return n;
  // else return fib(n-1) + fib(n-2);
  return C + (Math.pow(PHI, n) - Math.pow(PHI_, n));
}