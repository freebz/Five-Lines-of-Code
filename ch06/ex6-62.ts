// 예제 5.62 변경 전

function incrementCounter() {
  counter.setCounter(
    counter.getCounter() + 1);
}
function main() {
  for (let i = 0; i < 20; i++) {
    incrementCounter();
    console.log(counter.getCounter());
  }
}