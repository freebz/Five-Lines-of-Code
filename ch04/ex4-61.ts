// 예제 4.61 변경 후(2/2)

function transfer(
  from: string,
  to: string,
  amount: number)
{
  let fromAccountId = database.find(from);
  database.updateOne(fromAccountId,
    { $inc: { balance: -amount } });
  let toAccountId = database.find(to);
  database.updateOne(toAccountId,
    { $inc: { balance: amount } });
}