// 예제 7.32 매개변수가 있는 열악한 마이크로 아키텍처

class Stack<T> {
  private data: T[];
  printLast() { printFirst(this.data); }
}
function printFirst<T>(arr: T[]) {
  arr[0] = newBottomElement;
}