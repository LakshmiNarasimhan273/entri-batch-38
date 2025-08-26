document.addEventListener("DOMContentLoaded", () => {
    const generateBtn = document.getElementById("generateBtn");
    const validateBtn = document.getElementById("validateBtn");
    const otpinput = document.getElementById("otpinput");
    const messageBox = document.getElementById("message");

    // OTP Generation
    generateBtn.addEventListener("click", () => {
        // Math
        const otp = Math.floor(100000 + Math.random() * 999999); // 265435
        // browser stroage
        localStorage.setItem("generatedOtp", otp);
        messageBox.innerText = `OTP Generated ${otp}`
    });

    // OTP Validation
    validateBtn.addEventListener("click", () => {
        const enteredOtp = otpinput.value;
        const storedOtp = localStorage.getItem("generatedOtp");

        if(enteredOtp === storedOtp){
            messageBox.innerText = "OTP Verified";
            otpinput.value = "";
        }else{
            messageBox.innerText = "Invalid OTP";
        }
    })
})