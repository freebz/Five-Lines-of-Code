// 예제 11.10 데이터 구조를 이용한 FizzBuzz

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

interface FizzNum {
  next(): FizzNum;
  action(): FizzAction;
}
class FizzNum1 implements FizzNum {
  next() { return new FizzNum2(); }
  action() { return new FizzNumber(); }
}
class FizzNum2 implements FizzNum {
  next() { return new Fizz(); }
  action() { return new FizzNumber(); }
}
class Fizz implements FizzNum {
  next() { return new FizzNum1(); }
  action() { return new SayFizz(); }
}

interface BuzzNum {
  next(): BuzzNum;
  action(): BuzzAction;
}
class BuzzNum1 implements BuzzNum {
  next() { return new BuzzNum2(); }
  action() { return new BuzzNumber(); }
}
class BuzzNum2 implements BuzzNum {
  next() { return new BuzzNum3(); }
  action() { return new BuzzNumber(); }
}
class BuzzNum3 implements BuzzNum {
  next() { return new BuzzNum4(); }
  action() { return new BuzzNumber(); }
}
class BuzzNum4 implements BuzzNum {
  next() { return new Buzz(); }
  action() { return new BuzzNumber(); }
}
class Buzz implements BuzzNum {
  next() { return new BuzzNum1(); }
  action() { return new SayBuzz(); }
}

function fizzBuzz(n: number) {
  let f = new Fizz();
  let b = new Buzz();
  for (let i = 0; i < n; i++) {
    b.action().num(i, f.action());
    f = f.next();
    b = b.next();
  }
}