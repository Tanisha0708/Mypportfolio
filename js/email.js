import emailjs from '@emailjs/browser';

export function initializeEmailJS() {
    emailjs.init("YOUR_USER_ID"); // Replace with your EmailJS user ID

    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
            .then(() => {
                alert('Message sent successfully!');
                contactForm.reset();
            }, (error) => {
                alert('Error sending message. Please try again.');
                console.error(error);
            });
    });
} 
