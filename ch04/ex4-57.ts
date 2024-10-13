// 예제 4.57 초기 코드

function deposit(to: string, amount: number) {
  let accountId = database.find(to);
  database.updateOne(accountId, { $inc: { balance: amount } });
}

function transfer(from: string, to: string, amount: number) {
  deposit(from, -amount);
  deposit(to, amount);
}