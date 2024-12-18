// 예제 13.24 변경 전 버전 2: 데이터 객체

class StringConstructorConfig {
  constructor(
    public readonly prefix: string,
    public readonly joiner: string,
    public readonly postfix: string) { }
}
function stringConstructor(
    conf: StringConstructorConfig,
    parts: string[]) {
  return conf.prefix
      + parts.join(conf.joiner)
      + conf.postfix;
}