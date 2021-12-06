function getInputValue(inputId) {
  const inputField = document.getElementById(inputId);
  const inputFieldText = inputField.value;
  const inputFieldValue = Number(inputFieldText);
  inputField.value = "";
  return inputFieldValue;
}

function updateTotal(totalField, amount) {
  const total = document.getElementById(totalField);
  const totalText = total.innerText;
  const totalValue = Number(totalText);
  total.innerText = totalValue + amount;
}

function updateBalance() {
  const depositTotalText = document.getElementById("deposit-total").innerText;
  const depositTotalValue = Number(depositTotalText);
  const withdrawTotalText = document.getElementById("withdraw-total").innerText;
  const withdrawTotalValue = Number(withdrawTotalText);
  const balanceTotalField = document.getElementById("balance-total");
  balanceTotalField.innerText = depositTotalValue - withdrawTotalValue + 1240;
  const currentBalance = Number(balanceTotalField.innerText);
  return currentBalance;
}
document.getElementById("deposit-btn").addEventListener("click", function () {
  const amount = getInputValue("deposit-input-field");
  if (amount > 0) {
    updateTotal("deposit-total", amount);
    updateBalance();
  }
});
document.getElementById("withdraw-btn").addEventListener("click", function () {
  const amount = getInputValue("withdraw-input-field");
  const currentBalance = updateBalance();
  if (amount > 0 && amount <= currentBalance) {
    updateTotal("withdraw-total", amount);
    updateBalance();
  }
});
