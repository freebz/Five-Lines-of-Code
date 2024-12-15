// 예제 11.12 FizzBuzz 자료구조 사용

interface FizzAction {
  num(n: number): void;
  buzz(): void;
}
class SayFizz implements FizzAction {
  num(n: number) { console.log("Fizz"); }
  buzz() { console.log("FizzBuzz"); }
}
class FizzNumber implements FizzAction {
  num(n: number) { console.log(n); }
  buzz() { console.log("Buzz"); }
}

interface BuzzAction {
  num(n: number, act: FizzAction): void;
}
class SayBuzz implements BuzzAction {
  num(n: number, act: FizzAction) {
    act.buzz();
  }
}
class BuzzNumber implements BuzzAction {
  num(n: number, act: FizzAction) {
    act.num(n);
  }
}

const FIZZ = [
  new SayFizz(),
  new FizzNumber(),
  new FizzNumber()
];
const BUZZ = [
  new SayBuzz(),
  new BuzzNumber(),
  new BuzzNumber(),
  new BuzzNumber(),
  new BuzzNumber(),
];

function fizzBuzz(n: number) {
  for (let i = 0; i < n; i++) {
    BUZZ[i % BUZZ.length].num(i, FIZZ[i % FIZZ.length]);
  }
}