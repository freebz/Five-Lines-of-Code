// 예제 7.18 외부

class CapitalizedString {
  public value: string;
  constructor(str: string) {
    this.value = capitalize(str);
  }
}
function print(str: CapitalizedString) {
  console.log(str.value);
}