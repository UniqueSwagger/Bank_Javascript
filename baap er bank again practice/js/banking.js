function getUserInput(inputOf) {
  const input = document.getElementById(inputOf);
  const inputText = input.value;
  const inputAmount = Number(inputText);
  input.value = "";
  return inputAmount;
}
function updateTotal(totalOf, inputAmount) {
  const total = document.getElementById(totalOf);
  const totalText = total.innerText;
  const totalAmount = Number(totalText);
  total.innerText = totalAmount + inputAmount;
}
function getCurrentBalance() {
  const balanceTotal = document.getElementById("balance-total");
  const balanceTotalText = balanceTotal.innerText;
  const balanceTotalAmount = Number(balanceTotalText);
  return balanceTotalAmount;
}
function updateBalanceTotal(inputAmount) {
  const balanceTotal = document.getElementById("balance-total");
  const balanceTotalAmount = getCurrentBalance();
  balanceTotal.innerText = balanceTotalAmount + inputAmount;
}
function errorColor(inputOf) {
  document.getElementById(inputOf).classList.add("border-2", "border-red-600");
}
function inputError(errorOf, inputOf) {
  const error = document.getElementById(errorOf);
  error.innerText = "Invalid input";
  error.classList.remove("invisible");
  document.getElementById(inputOf).classList.add("border-2", "border-red-600");
}
function errorRemove(errorOf, inputOf) {
  const error = document.getElementById(errorOf);
  error.classList.add("invisible");
  document
    .getElementById(inputOf)
    .classList.remove("border-2", "border-red-600");
}

//add event listener to deposit button
document.getElementById("deposit-btn").addEventListener("click", function () {
  const depositInputAmount = getUserInput("deposit-input");
  if (depositInputAmount > 0) {
    updateTotal("deposit-total", depositInputAmount);
    updateBalanceTotal(depositInputAmount);
    errorRemove("forErrorDeposit", "deposit-input");
  } else {
    inputError("forErrorDeposit", "deposit-input");
  }
});

//add event listener to withdraw button
document.getElementById("withdraw-btn").addEventListener("click", function () {
  const withdrawInputAmount = getUserInput("withdraw-input");
  const currentBalance = getCurrentBalance();
  if (withdrawInputAmount > 0 && withdrawInputAmount <= currentBalance) {
    updateTotal("withdraw-total", withdrawInputAmount);
    updateBalanceTotal(-withdrawInputAmount);
    const withdrawError = document.getElementById("forErrorWithdraw");
    withdrawError.classList.add("invisible");
    document
      .getElementById("withdraw-input")
      .classList.remove("border-2", "border-red-600");
    errorRemove("forErrorWithdraw", "withdraw-input");
  } else if (withdrawInputAmount > currentBalance) {
    const withdrawError = document.getElementById("forErrorWithdraw");
    withdrawError.innerText =
      "You cannot withdraw more than what you have in your account.";
    withdrawError.classList.remove("invisible");
    errorColor("withdraw-input");
  } else {
    inputError("forErrorWithdraw", "withdraw-input");
  }
});
