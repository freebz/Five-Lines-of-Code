// 예제 7.26 정적 타입

class Configuration {
  constructor(
    public readonly prefix: string,
    public readonly joiner: string,
    public readonly postfix: string) { }
}
function stringConstructor(
    conf: Configuration,
    parts: string[]) {
  return conf.prefix
      + parts.join(conf.joiner)
      + conf.postfix;
}