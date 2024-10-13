// 예제 4.111 초기 코드

interface A {
  m1(): void;
  m2(): void;
}
class B implements A {
  m1() { console.log("m1"); }
  m2() { this.m3(); }
  m3() { console.log("m3"); }
}
let a = new B();
a.m1();