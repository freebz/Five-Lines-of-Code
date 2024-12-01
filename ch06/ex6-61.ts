// 예제 5.61 변경 후(2/4)

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