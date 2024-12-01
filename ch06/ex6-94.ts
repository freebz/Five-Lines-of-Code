// 예제 6.94 외부

class CapitalizedString {
  public readonly value: string;
  constructor(str: string) {
    this.value = capitalize(str);
  }
}
function print(str: CapitalizedString) {
  console.log(str.value);
}