// 예제 5.61 변경 후

if ((today.getDate() === 1
  && account.getBalance()
  > invoice.getAmount())
  || (invoice.isLastDayOfPayment()
  && invoice.isApproved())
{
  account.pay(bill);
}