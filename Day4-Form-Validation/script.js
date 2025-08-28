document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("singupForm");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        let validationSuccess = true;

        // RegeX Pattern (Regular Expression) - raw format validation processing
        const namePattern = /^[A-Za-z\s]+$/;
        // IMPORTANT PATTERN FOR INTERVIEWS
        // narasimhan@mail.com - common things -> @ | mail . | com
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordPattern = /^[A-za-z0-9!@#$%*]{6,}$/;
        const phonePattern = /^[0-9]{10}$/;
        const cityPattern = /^[A-Za-z\s]+$/;
        const messagePattern = /^.{5,}$/;

        // Input fields
        const username = document.getElementById("username");
        const email = document.getElementById("email");
        const password = document.getElementById("password")
        const confirmPassword = document.getElementById("confirmPassword");
        const phone = document.getElementById("phoneNumber");
        const city = document.getElementById("city");
        const message = document.getElementById("message");

        // Clear previous errors
        document.querySelectorAll(".error").forEach(clear => clear.textContent = "");

        // Conditions to test our patterns and input fields
        
        // Testing username
        if(!namePattern.test(username.value)){
            document.getElementById("usernameError").textContent = "Username must contain only letters";
            validationSuccess = false;
        }

        // Testing email
        if(!emailPattern.test(email.value)){
            document.getElementById("emailError").textContent = "Enter a valid email address";
            validationSuccess = false;
        }

        // Testing password
        if(!passwordPattern.test(password.value)){
            document.getElementById("passwordError").textContent = "Password must be above 6 characters and includes letters, numbers and special charaters";
            validationSuccess = false;
        }

        // Validation for Confirm Password
        if(password.value !== confirmPassword.value || confirmPassword.value === ""){
            document.getElementById("confirmPasswordError").textContent = "Password do not match";
            validationSuccess = false;
        }

        // Testing Phone number
        if(!phonePattern.test(phone.value)){
            document.getElementById("phoneError").textContent = "Phone number must be 10 digits";
            validationSuccess = false;
        }

        // Testing City
        if(!cityPattern.test(city.value)){
            document.getElementById("cityError").textContent = "City name must contain only letters";
            validationSuccess = false;
        }

        // Testing message
        if(!messagePattern.test(message.value)){
            document.getElementById("messageError").textContent = "Message must contain at least 5 characters";
            validationSuccess = false;
        }

        if(validationSuccess){
            alert("Form submitted successfully");
            form.reset();
        }
    })
})