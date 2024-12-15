// 예제 11.4 메서드 호출

function insert(data: object) {
  let db = new Database();
  let normalized = normalize(data);
  db.insert(normalized);
}
function a() {
  // ...
  insert(obj1);
  // ...
}
function b() {
  // ...
  insert(obj2);
  // ...
}