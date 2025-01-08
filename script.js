// script.js

document.getElementById("password").addEventListener("input", function () {
    const password = this.value;
    const strengthIndicator = document.getElementById("strength-indicator");
    const strengthText = document.getElementById("strength-text");
  
    let strength = 0;
  
    // Check for password conditions
    if (password.length >= 8) strength++; // Length
    if (/[A-Z]/.test(password)) strength++; // Uppercase
    if (/[a-z]/.test(password)) strength++; // Lowercase
    if (/[0-9]/.test(password)) strength++; // Numbers
    if (/[^A-Za-z0-9]/.test(password)) strength++; // Special characters
  
    // Update strength indicator and text
    const colors = ["red", "orange", "yellow", "green", "darkgreen"];
    const texts = ["Weak", "Fair", "Moderate", "Strong", "Very Strong"];
  
    strengthIndicator.style.width = `${strength * 20}%`;
    strengthIndicator.style.background = colors[strength - 1] || "red";
    strengthText.textContent = `Strength: ${texts[strength - 1] || "Weak"}`;
  });