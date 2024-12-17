// 예제 12.16 연결 리스트 정렬

interface Node<T> { element: T, next: Node<T> }
class LinkedList<T> {
  private root: Node<T> | null;
  // ...
  sort() {
    let arr = this.toArray();
    Array.sort(arr);
    let list = new LinkedList<T>(arr);
    this.root = list.root;
  }
}