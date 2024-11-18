function promptPassword() {
  const password = prompt("Enter the password:");
  if (password !== null) {
    document.getElementById("error-message").style.display = "block";
    document.getElementById("forgot-password").style.display = "inline";
  }
}

function forgotPassword() {
  const securityAnswer = prompt("What is your biggest secrete you ever kept?");
  if (securityAnswer !== null) {
    // Redirect to a different page (you can replace the URL below with your desired page)
    window.location.href = "https://www.example.com";
  }
}