// 예제 7.20 삭제 가능한 메서드의 예

interface A {
  m1(): void;
  m2(): void;
}
class B implements A {
  m1() { console.log("a1"); }
  m2() { m3(); }
  m3() { console.log("m3"); }
}
let a = new B();
a.m1();