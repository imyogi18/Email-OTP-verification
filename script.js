// Initialize emailjs with your service ID
emailjs.init("E20iS5j0wQ2gOMFjH");

// Function to generate a 6-digit OTP
function generateOTP() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

// Function to send OTP via email
function sendOTP() {
    const email = document.getElementById("email").value; // Get email from input
    const otp = generateOTP(); // Generate OTP

    // Store generated OTP in localStorage
    localStorage.setItem('generatedOTP', otp);

    // Parameters for the email template
    const templateParams = {
        to_email: email,
        otp: otp
    };

    // Send email using emailjs
    emailjs.send('service_qw7h6nh', 'template_bjh4xpc', templateParams)
        .then((response) => {
            alert('OTP sent successfully!'); // Alert user on success
        }, (error) => {
            alert('Failed to send OTP. Please try again.'); // Alert user on failure
            console.log('FAILED...', error); // Log detailed error to console
        });
}

// Function to verify entered OTP
function verifyOTP() {
    const enteredOTP = document.getElementById("otp").value; // Get entered OTP
    const generatedOTP = localStorage.getItem('generatedOTP'); // Get generated OTP from localStorage

    if (enteredOTP === generatedOTP) {
        alert('OTP verified successfully!'); // Alert user on successful verification
        document.querySelector('form button[type="submit"]').disabled = false; // Enable submit button
    } else {
        alert('Invalid OTP. Please try again.'); // Alert user on invalid OTP
    }
}
