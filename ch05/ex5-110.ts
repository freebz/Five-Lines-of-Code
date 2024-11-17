// 예제 5.110 변경 후(7/7)

class ArrayMinimum {
  // ...
  process(arr: number[]) {
    for (let i = 0; i < arr.length; i++)
      this.processor.processElement(arr[i]);
    return this.processor.getAccumulator();
  }
  


}
class ArraySum {
  // ...
  process(arr: number[]) {
    for (let i = 0; i < arr.length; i++)
      this.processor.processElement(arr[i]);
    return this.processor.getAccumulator();
  }
  

  
}