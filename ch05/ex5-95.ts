// 예제 5.95 구현(Implements)

interface A {
  m(): void;
}
class B implements A {
  m() { console.log("Hello"); }
}