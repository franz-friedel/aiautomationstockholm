// This file contains JavaScript functionality for the website, including form validation and interactive elements.

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (validateForm(name, email, message)) {
                // Submit the form data to the server
                contactForm.submit();
            } else {
                alert('Please fill in all fields correctly.');
            }
        });
    }

    function validateForm(name, email, message) {
        return name.trim() !== '' && validateEmail(email) && message.trim() !== '';
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});