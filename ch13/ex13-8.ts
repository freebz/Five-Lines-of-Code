// 예제 13.8 변경 후

class Package {
  private priority: Importance;
  scheduleDispatch() {
    if (this.priority === Importance.Priority)
      dispatchImmediately(this);
    else
      queue.push(this);
  }
}
enum Importance {
  Priority, Regular
}