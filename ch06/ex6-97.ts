// 예제 6.97 변경 후(1/2)

class Transfer {
  deposit(to: string, amount: number)
  {
    let accountId = database.find(to);
    database.updateOne(
      accountId,
      { $inc: { balance: amount } });
  } 
}