// 예제 6.92 변경 후

class CapitalizedString {
  private value: string;
  constructor(str: string) {
    this.value = capitalize(str);
  }
  print() {

    console.log(this.value);
  }
}