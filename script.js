// Get form and inputs
const form = document.getElementById("registrationForm");
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const successMessage = document.getElementById("successMessage");

// Helper: show error for a field
function showError(input, message) {
  const formControl = input.parentElement; // .form-control
  const errorDisplay = formControl.querySelector(".error-message");

  errorDisplay.textContent = message;
  input.classList.add("error");
}

// Helper: clear error
function clearError(input) {
  const formControl = input.parentElement;
  const errorDisplay = formControl.querySelector(".error-message");

  errorDisplay.textContent = "";
  input.classList.remove("error");
}

// Email validation regex (simple)
function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

// Main validation on submit
form.addEventListener("submit", function (event) {
  event.preventDefault(); // stop default submit for now

  // Clear previous success & errors
  successMessage.textContent = "";
  clearError(usernameInput);
  clearError(emailInput);
  clearError(passwordInput);

  let isValid = true;

  // Validate username
  const usernameValue = usernameInput.value.trim();
  if (usernameValue === "") {
    showError(usernameInput, "Username is required");
    isValid = false;
  } else if (usernameValue.length < 3) {
    showError(usernameInput, "Username must be at least 3 characters");
    isValid = false;
  }

  // Validate email
  const emailValue = emailInput.value.trim();
  if (emailValue === "") {
    showError(emailInput, "Email is required");
    isValid = false;
  } else if (!isValidEmail(emailValue)) {
    showError(emailInput, "Please enter a valid email address");
    isValid = false;
  }

  // Validate password
  const passwordValue = passwordInput.value.trim();
  if (passwordValue === "") {
    showError(passwordInput, "Password is required");
    isValid = false;
  } else if (passwordValue.length < 6) {
    showError(passwordInput, "Password must be at least 6 characters");
    isValid = false;
  }

  // If everything is valid
  if (isValid) {
    successMessage.textContent = "Form submitted successfully! ✅";

    // Here you could actually submit the form to a server.
    // form.submit();
  }
});
