// 예제 6.98 변경 전

class Transfer {



  
  deposit(to: string, amount: number)
  {
    let accountId = database.find(to);
    database.updateOne(
      accountId,
      { $inc: { balance: amount } });
  } 
}