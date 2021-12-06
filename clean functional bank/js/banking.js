function getInputValue(inputId) {
  const inputField = document.getElementById(inputId);
  const inputText = inputField.value;
  const inputAmount = Number(inputText);
  inputField.value = "";
  return inputAmount;
}
function updateTotalField(total, amount) {
  const Total = document.getElementById(total);
  const TotalText = Total.innerText;
  const TotalAmount = Number(TotalText);
  Total.innerText = amount + TotalAmount;
}
function getCurrentBalance() {
  const balanceTotal = document.getElementById("balance-total");
  const balanceTotalText = balanceTotal.innerText;
  const balanceTotalAmount = Number(balanceTotalText);
  return balanceTotalAmount;
}
function updateBalance(amount, isAdd) {
  const balanceTotal = document.getElementById("balance-total");
  const balanceTotalAmount = getCurrentBalance();
  if (isAdd == true) {
    balanceTotal.innerText = balanceTotalAmount + amount;
  } else {
    balanceTotal.innerText = balanceTotalAmount - amount;
  }
}

//handle deposit button

document.getElementById("deposit-btn").addEventListener("click", function () {
  const depositAmount = getInputValue("deposit-input-field");
  if (depositAmount > 0) {
    updateTotalField("deposit-total", depositAmount);
    updateBalance(depositAmount, true);
  }
});

//handle withdraw button

document.getElementById("withdraw-btn").addEventListener("click", function () {
  const withdrawAmount = getInputValue("withdraw-input-field");
  const currentBalance = getCurrentBalance();
  if (withdrawAmount > 0 && withdrawAmount <= currentBalance) {
    updateTotalField("withdraw-total", withdrawAmount);
    updateBalance(withdrawAmount, false);
  }
});

console.log(add(5, 5));
function add(num1, num2) {
  const result = num1 + num2;
  return result;
}
