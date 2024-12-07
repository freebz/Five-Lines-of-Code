// 예제 7.10 경쟁 상태의 대한 의사코드

class Counter implements Runnable {
  private static number = 0;
  run() {
    for (let i = 0; i < 10; i++)
      console.log(this.number++);
    }
}
let a = new Thread(new Counter());
let b = new Thread(new Counter());
a.start();
b.start();