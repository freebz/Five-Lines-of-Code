// 예제 5.59 초기 코드

if (today.getDate() === 1 && account.getBalance() > invoice.getAmount()) {
  account.pay(bill);
} else if (invoice.isLastDayOfPayment() && invoice.isApproved()) {
  account.pay(bill);
}