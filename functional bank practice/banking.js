function getUserInput(inputId) {
  const input = document.getElementById(inputId);
  const inputText = input.value;
  const inputAmount = Number(inputText);
  input.value = "";
  return inputAmount;
}
function updateTotal(totalValue, input) {
  const total = document.getElementById(totalValue);
  const totalText = total.innerText;
  const totalAmount = Number(totalText);
  total.innerText = totalAmount + input;
}
function currentBalance() {
  const balanceTotal = document.getElementById("balance-total");
  const balanceTotalText = balanceTotal.innerText;
  const balanceTotalAmount = Number(balanceTotalText);
  return balanceTotalAmount;
}
function updateBalance(input, isAdd) {
  const balanceTotal = document.getElementById("balance-total");
  const balanceTotalAmount = currentBalance();
  if (isAdd == true) {
    balanceTotal.innerText = balanceTotalAmount + input;
  } else {
    balanceTotal.innerText = balanceTotalAmount - input;
  }
}
function errorHandle(message) {
  const modal = document.getElementById(message);
  modal.showModal();
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
      modal.close();
    }
  };
  modal.style.display = "block";
}
// add event listener to deposit button
document.getElementById("deposit-btn").addEventListener("click", function () {
  const depositInput = getUserInput("deposit-input");
  if (depositInput > 0) {
    updateTotal("deposit-total", depositInput);
    updateBalance(depositInput, true);
  } else {
    errorHandle("error-message-2");
  }
});
//add event listener to withdraw button
document.getElementById("withdraw-btn").addEventListener("click", function () {
  const withdrawInput = getUserInput("withdraw-input");
  const balanceTotalAmount = currentBalance();
  if (withdrawInput > 0 && withdrawInput <= balanceTotalAmount) {
    updateTotal("withdraw-total", withdrawInput);
    updateBalance(withdrawInput, false);
  } else if (withdrawInput > balanceTotalAmount) {
    errorHandle("error-message-1");
  } else {
    errorHandle("error-message-2");
  }
});
