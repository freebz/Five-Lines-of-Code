// 예제 7.31 getter가 있는 열악한 마이크로 아키텍처

class Stack<T> {
  private data: T[];
  getArray() { return this.data; }
}
Stack.getArray()[0] = newBottomElement;