// 예제 5.63 변경 후(3/4)

function incrementCounter(counter: Counter) {
  counter.setCounter(
    counter.getCounter() + 1);
}
function main() {
  for (let i = 0; i < 20; i++) {
    incrementCounter();
    console.log(counter.getCounter());
  }
}