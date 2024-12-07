// 예제 7.14 기아에 대한 의사코드

class Printer implements Runnable {
  constructor(private name: string,
    private mine: Lock, private other: Lock) {
  }
  run() {
    while(true) {
      other.waitFor();
      mine.lock();
      console.log(this.name);
      mine.free();
    }
  }
}
let a = new Thread(
  new Printer("A", aLock, bLock));
let b = new Thread(
  new Printer("B", bLock, aLock));
a.start();
b.start();