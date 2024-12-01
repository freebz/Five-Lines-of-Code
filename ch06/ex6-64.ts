// 예제 5.64 잘못된 코드

function main() {
  for (let i = 0; i < 20; i++) {
    let counter = new Counter();
    incrementCounter(counter);
    console.log(counter.getCounter());
  }
}