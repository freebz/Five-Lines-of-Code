// 예제 5.94 전체 코드

class Cls {
  private text: string = "Hello";
  public name: string;
  private getText() { return this.text; }
  printText() { console.log(this.getText()); }
}