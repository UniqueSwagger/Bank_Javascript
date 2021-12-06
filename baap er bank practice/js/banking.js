// add event listener to deposit button
document.getElementById("deposit-btn").addEventListener("click", function () {
  //get deposit total
  const getDepositTotal = document.getElementById("deposit-total");
  const depositTotalText = getDepositTotal.innerText;
  const depositTotalAmount = parseFloat(depositTotalText);
  //get deposit input
  const getDepositInput = document.getElementById("deposit-input-field");
  const depositInputText = getDepositInput.value;
  const depositInputValue = parseFloat(depositInputText);
  //total deposit
  const newDepositTotal = depositTotalAmount + depositInputValue;
  //show total deposit
  getDepositTotal.innerText = newDepositTotal;
  //get balance total
  const getBalanceTotal = document.getElementById("balance-total");
  const balanceTotalText = getBalanceTotal.innerText;
  const balanceTotalAmount = parseFloat(balanceTotalText);
  // update balance total
  const newBalanceTotalAmount = balanceTotalAmount + depositInputValue;
  //show updated balance
  getBalanceTotal.innerText = newBalanceTotalAmount;
  //clear the deposit input field
  getDepositInput.value = "";
});

//add event listener to withdraw button
document.getElementById("withdraw-btn").addEventListener("click", function () {
  //get withdraw total
  const getWithdrawTotal = document.getElementById("withdraw-total");
  const withdrawTotalText = getWithdrawTotal.innerText;
  const withdrawTotalAmount = parseFloat(withdrawTotalText);
  //get withdraw input
  const getWithdrawInput = document.getElementById("withdraw-input-field");
  const withdrawInputText = getWithdrawInput.value;
  const withdrawInputValue = parseFloat(withdrawInputText);
  //total withdraw
  const newWithdrawTotal = withdrawTotalAmount + withdrawInputValue;
  getWithdrawTotal.innerText = newWithdrawTotal;
  //get balance total
  const getBalanceTotal = document.getElementById("balance-total");
  const balanceTotalText = getBalanceTotal.innerText;
  const balanceTotalAmount = parseFloat(balanceTotalText);
  //update balance total
  const newBalanceTotalAmount = balanceTotalAmount - withdrawInputValue;
  //show updated balance
  getBalanceTotal.innerText = newBalanceTotalAmount;
  //clear the withdraw input field
  getWithdrawInput.value = "";
});
