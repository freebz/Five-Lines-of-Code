// 예제 11.27 변경 전

function foo(obj: any) {
  if (obj instanceof A) {
    obj.methodA();
  } else if (obj instanceof B) {
    obj.methodB();
  }
}
class A {
  methodA() { ... }
}
class B {
  methodB() { ... }
}