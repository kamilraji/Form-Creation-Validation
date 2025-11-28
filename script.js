
document.addEventListener("DOMContentLoaded", function () {
    // Form selection
    const form = document.getElementById("registration-form");

    // Feedback div selection
    const feedbackDiv = document.getElementById("form-feedback");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Retrieve user inputs
        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        let isValid = true;
        // 👇 ALX wants this name
        let messages = [];

        // Validate username
        if (username.length < 3) {
            isValid = false;
            messages.push("Username must be at least 3 characters");
        }

        // Validate password
        if (password.length < 6) {
            isValid = false;
            messages.push("Password must be at least 6 characters");
        }

        // Validate email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            isValid = false;
            messages.push("Please enter a valid email address");
        }

        // Feedback display logic
        feedbackDiv.style.display = "block";

        if (isValid) {
            feedbackDiv.textContent = "Registration successful";
            feedbackDiv.style.color = "#28a745"; // green
        } else {
            // 👇 Use messages here too
            feedbackDiv.innerHTML = messages.join("<br>");
            feedbackDiv.style.color = "#dc3545"; // red
        }
    });
});



