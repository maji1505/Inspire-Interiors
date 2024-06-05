/* script.js */

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    const emailBody = `
        Name: ${name}\n
        Phone: ${phone}\n
        Message: ${message}
    `;

    window.location.href = `mailto:kushalmaji511@gmail.com?subject=Contact Form Submission&body=${encodeURIComponent(emailBody)}`;
});
