function getInput(inputId) {
  const input = document.getElementById(inputId);
  const inputText = input.value;
  const inputValue = Number(inputText);
  input.value = "";
  return inputValue;
}
function getInnerTextValue(fieldId) {
  const field = document.getElementById(fieldId);
  const fieldText = field.innerText;
  const fieldValue = Number(fieldText);
  return fieldValue;
}
function updateTotal(totalFieldId, amount) {
  const totalValue = getInnerTextValue(totalFieldId);
  document.getElementById(totalFieldId).innerText = totalValue + amount;
}
function updateBalance(amount, isAdding) {
  const totalBalanceValue = getInnerTextValue("balance-total");
  if (isAdding) {
    document.getElementById("balance-total").innerText =
      totalBalanceValue + amount;
  } else {
    document.getElementById("balance-total").innerText =
      totalBalanceValue - amount;
  }
}

document.getElementById("deposit-btn").addEventListener("click", function () {
  const amount = getInput("deposit-input-field");
  if (amount > 0) {
    updateTotal("deposit-total", amount);
    updateBalance(amount, true);
  }
});
document.getElementById("withdraw-btn").addEventListener("click", function () {
  const amount = getInput("withdraw-input-field");
  const currentBalance = getInnerTextValue("balance-total");
  if (amount > 0 && amount <= currentBalance) {
    updateTotal("withdraw-total", amount);
    updateBalance(amount, false);
  }
});
