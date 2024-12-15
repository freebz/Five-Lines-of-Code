// 예제 11.28 변경 후

function foo(obj: Foo) {
  obj.foo();
}
class A {
  foo() {
    this.methodA();
  }
  methodA() { ... }
}
class B {
  foo() {
    this.methodB();
  }
  methodB() { ... }
}
interface Foo {
  foo(): void;
}