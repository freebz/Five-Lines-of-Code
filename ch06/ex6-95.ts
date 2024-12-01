// 예제 6.95 초기 코드

function deposit(
  to: string, amount: number)
{
  let accountId = database.find(to);
  database.updateOne(
    accountId,
    { $inc: { balance: amount } });
}