// 예제 12.14 단순한 스레드

interface Runnable { run(): void; }
class A implements Runnable {
  // ...
  run() {
    while (true) {
      let result = this.input.dequeue();
      Thread.sleep(1000);
      this.output.enqueue(result);
    }
  }
}
class B implements Runnable {
  // ...
  run() {
    while (true) {
      let result = this.input.dequeue();
      Thread.sleep(2000);
      this.output.enqueue(result);
    }
  }
}
let enter = new Queue();
let between = new Queue();
let exit = new Queue();
let a = new A(enter, between);
let b = new B(between, exit);
let aThread = new Thread(a);
let bThread = new Thread(b);
aThread.start();
bThread.start();