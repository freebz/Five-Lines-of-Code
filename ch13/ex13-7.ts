// 예제 13.7 이전

class Package {
  private priority: boolean;
  scheduleDispatch() {
    if (this.priority)
      dispatchImmediately(this);
    else
      queue.push(this);
  }
}