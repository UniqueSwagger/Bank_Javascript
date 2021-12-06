document.getElementById("submit-btn").addEventListener("click", function () {
  const email = document.getElementById("email-input");
  const emailValue = email.value;
  const password = document.getElementById("password-input");
  const passwordValue = password.value;
  if (emailValue == "sontan@baap.com" && passwordValue == "secret") {
    window.location.href = "index2.html";
  } else {
    const errorMessage = document.getElementById("error-message");
    errorMessage.classList.remove("invisible");
    if (emailValue != "sontan@baap.com" && passwordValue == "secret") {
      email.classList.add("border-2", "border-red-600");
    } else if (emailValue == "sontan@baap.com" && passwordValue != "secret") {
      password.classList.add("border-2", "border-red-600");
    } else if (emailValue != "sontan@baap.com" && passwordValue != "secret") {
      email.classList.add("border-2", "border-red-600");
      password.classList.add("border-2", "border-red-600");
    }
  }
});
