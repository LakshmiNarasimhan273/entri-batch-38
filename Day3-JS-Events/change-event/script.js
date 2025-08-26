document.addEventListener("DOMContentLoaded", () => {
    const passwordInput = document.getElementById("passwordInput");
    const toggleBox = document.getElementById("togglePassword");

    toggleBox.addEventListener("change", () => {
        // Main logic condition to change the input field type
        if(toggleBox.checked){
            passwordInput.type = "text";
        }else{
            passwordInput.type = "password";
        }
    })
})