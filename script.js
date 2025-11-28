cument.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("registrationForm");
    const feedbackDiv = document.getElementById("feedback");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Retrieve user inputs
        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        let isValid = true;
        let errorMessages = [];

        // Validate username
        if (username.length < 3) {
            isValid = false;
            errorMessages.push("Username must be at least 3 characters");
        }

        // Validate password
        if (password.length < 6) {
            isValid = false;
            errorMessages.push("Password must be at least 6 characters");
        }

        // Validate email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            isValid = false;
            errorMessages.push("Enter a valid email address");
        }

        // Display feedback logic
        feedbackDiv.style.display = "block";

        if (isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745";  // green
        } else {
            feedbackDiv.innerHTML = errorMessages.join("<br>");
            feedbackDiv.style.color = "#dc3545";  // red
        }

    });

});
