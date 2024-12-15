// 예제 11.8 제어 호름을 사용한 FizzBuzz

function fizzBuzz(n: number) {
  for (let i = 0; i < n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else {
      console.log(i);
    }
  }
}