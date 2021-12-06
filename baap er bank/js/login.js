document.getElementById("login-submit").addEventListener("click", function () {
  // get user email.
  const emailField = document.getElementById("user-email");
  const userEmail = emailField.value;
  // get user password.
  const passwordField = document.getElementById("user-password");
  const userPassword = passwordField.value;
  // check email,password and show error handling.
  if (userEmail == "sontan@baap.com" && userPassword == "secret") {
    window.location.href = "banking.html";
  } else if (userEmail == "sontan@baap.com" && userPassword != "secret") {
    document.getElementById("pass-dialog").showModal();
  } else if (userEmail != "sontan@baap.com" && userPassword == "secret") {
    document.getElementById("email-dialog").showModal();
  } else if (userEmail == "" && userPassword == "") {
    document.getElementById("forEmpty-dialog").showModal();
  } else if (userEmail != "sontan@baap.com" && userPassword != "secret") {
    document.getElementById("forBoth-dialog").showModal();
  }
});

// important:click korbo jake event listener dibo take ..
