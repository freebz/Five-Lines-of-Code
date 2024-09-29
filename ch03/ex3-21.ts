// 예제 3.21 2에서 n까지의 모든 소수를 출력하는 함수

function reportPrimes(n: number) {
  for (let i = 2; i < n; i++)
    if (isPrime(i))
      console.log(`${i} is prime`);
}