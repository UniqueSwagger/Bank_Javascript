// handle deposit vent handler

document.getElementById("deposit-btn").addEventListener("click", function () {
  //get the amount of deposited

  const depositInput = document.getElementById("deposit-input");
  const newDepositText = depositInput.value;
  const newDepositAmount = parseFloat(newDepositText);

  // update deposit total

  const depositTotal = document.getElementById("deposit-total");
  const previousDepositText = depositTotal.innerText;
  const previousDepositAmount = parseFloat(previousDepositText);
  const newDepositTotal = previousDepositAmount + newDepositAmount;
  depositTotal.innerText = newDepositTotal;

  // update account balance

  const balanceTotal = document.getElementById("balance-total");
  const balanceTotalText = balanceTotal.innerText;
  const previousBalanceTotalAmount = parseFloat(balanceTotalText);
  const newBalanceTotal = previousBalanceTotalAmount + newDepositAmount;
  balanceTotal.innerText = newBalanceTotal;

  //    error handling
  if (isNaN(newDepositAmount) == true) {
    depositTotal.innerText = "00";
    balanceTotal.innerText = "1240";
  }

  // clear the deposit input field
  depositInput.value = "";
});

// handle withdraw event handler

document.getElementById("withdraw-btn").addEventListener("click", function () {
  // get the amount of withdrawal

  const withdrawInput = document.getElementById("withdraw-input");
  const withdrawText = withdrawInput.value;
  const newWithdrawAmount = parseFloat(withdrawText);

  // update withdraw total

  const withdrawTotal = document.getElementById("withdraw-total");
  const previousWithdrawText = withdrawTotal.innerText;
  const previousWithdrawAmount = parseFloat(previousWithdrawText);
  const newWithdrawTotal = previousWithdrawAmount + newWithdrawAmount;
  withdrawTotal.innerText = newWithdrawTotal;

  // update account balance

  const balanceTotal = document.getElementById("balance-total");
  const balanceTotalText = balanceTotal.innerText;
  const previousBalanceTotalAmount = parseFloat(balanceTotalText);
  const newBalanceTotal = previousBalanceTotalAmount - newWithdrawAmount;
  balanceTotal.innerText = newBalanceTotal;

  //    error handling
  if (isNaN(newWithdrawAmount) == true) {
    withdrawTotal.innerText = "00";
    balanceTotal.innerText = "1240";
  }

  // clear the withdraw input field

  withdrawInput.value = "";
});
