// 예제 7.17 내부

class CapitalizedString {
  private value: string;
  constructor(str: string) {
    this.value = capitalize(str);
  }
  print() {
    console.log(this.value);
  }
}