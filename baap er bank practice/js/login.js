document.getElementById("submit-btn").addEventListener("click", function () {
  //get email id
  const emailInputField = document.getElementById("email");
  const emailIdIs = emailInputField.value;

  //get password

  const passwordInputField = document.getElementById("password");
  const passwordIs = passwordInputField.value;

  // give condition

  if (emailIdIs == "sontan@baap.com" && passwordIs == "secret") {
    window.location.href = "banking.html";
  }
});
