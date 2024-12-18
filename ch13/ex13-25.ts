// 예제 13.25 변경 후

function stringConstructor(
    prefix: string,
    joiner: string,
    postfix: string,
    parts: string[]) {
  return prefix + parts.join(joiner) + postfix;
}