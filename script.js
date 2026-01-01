let isLogin = true;

/* Toggle between Login & Signup */
function toggleForm() {
    isLogin = !isLogin;

    document.getElementById("form-title").innerText = isLogin ? "Login" : "Signup";
    document.getElementById("toggle-text").innerText =
        isLogin ? "Don't have an account?" : "Already have an account?";

    document.getElementById("name").style.display = isLogin ? "none" : "block";
    document.getElementById("error-msg").innerText = "";
}

/* Form submission with validation */
function submitForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMsg = document.getElementById("error-msg");

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        errorMsg.innerText = "Please enter a valid email";
        return;
    }

    // Password validation
    if (password.length < 6) {
        errorMsg.innerText = "Password must be at least 6 characters";
        return;
    }

    // Signup name validation
    if (!isLogin && name === "") {
        errorMsg.innerText = "Name is required for signup";
        return;
    }

    errorMsg.style.color = "green";
    errorMsg.innerText = isLogin ? "Login Successful!" : "Signup Successful!";
}
