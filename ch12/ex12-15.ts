// 예제 12.15 리소스 풀링

interface Runnable { run(): void; }
interface Task { execute(): void; }
class A implements Task {
  // ...
  execute() {
    let result = this.input.dequeue();
    Thread.sleep(1000);
    this.output.enqueue(result);
  }
}
class B implements Task {
  // ...
  execute() {
    let result = this.input.dequeue();
    Thread.sleep(2000);
    this.output.enqueue(result);
  }
}
class Worker implements Runnable {
  run() {
    while (true) {
      let task = this.tasks.dequeue();
      task.run();
    }
  }
}
let enter = new Queue();
let between = new Queue();
let exit = new Queue();
let tasks = new Queue();
enter.onEnqueue(element => tasks.enqueue(
  new A(enter, between)));
between.onEnqueue(element => tasks.enqueue(
  new B(between, exit)));
let pool = [
  new Thread(new Worker()),
  new Thread(new Worker())];
pool.forEach(t => t.start());