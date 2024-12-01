// 예제 5.56 초기 코드

let counter = 0;
function incrementCounter() {
  counter++;
}
function main() {
  for (let i = 0; i < 20; i++) {
    incrementCounter();
    console.log(counter);
  }
}