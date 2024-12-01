// 예제 5.60 변경 전

function incrementCounter() {
  counter++;

}
function main() {
  for (let i = 0; i < 20; i++) {
    incrementCounter();
    console.log(counter);
  }
}