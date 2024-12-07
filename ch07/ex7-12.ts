// 예제 7.12 교착 상태에 대한 의사코드

class Counter implements Runnable {
  private static number = 0;
  constructor(
    private mine: Lock, private other: Lock) {
  }
  run() {
    for (let i = 0; i < 10; i++) {
      mine.lock();
      other.waitFor();
      console.log(this.number++);
      mine.free();
    }
  }
}
let aLock = new Lock();
let bLock = new Lock();
let a = new Thread(new Counter(aLock, bLock));
let b = new Thread(new Counter(bLock, aLock));
a.start();
b.start();