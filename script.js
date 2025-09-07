const typingE1 = document.querySelector(".typing");
const words = ["Frontend Developer", "UI/UX Designer", "Coder"];
let i = 0, j = 0, isDeleting = false;

function typeEffect() {
    const word = words[i];
    typingE1.textContent = word.substring(0, j);

    if (!isDeleting && j < word.length) {
        j++;
        setTimeout(typeEffect, 120);
    } else if (isDeleting && j > 0) {
        j--;
        setTimeout(typeEffect, 60);
    } else {
        isDeleting = !isDeleting;
        if (!isDeleting) i = (i + 1) % words.length;
        setTimeout(typeEffect, 700);
    }
}

typeEffect();


const reveals=document.querySelectorAll(".reveal");
const revealOnScroll=() => {
  const windowHeight=window.innerHeight;
  reveals.forEach(el =>{
    const rect=el.getBoundingClientRect();
    if(rect.top<windowHeight-80) el.classList.add("in");
  });
};
window.addEventListener("scroll", revealOnScroll);
revealOnScroll();


// Select form and message container
const form = document.getElementById('contactForm');
const formMessage = document.getElementById('form-message');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent page reload

    const formData = new FormData(form);

    fetch('contact.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        // Remove any previous message
        formMessage.innerHTML = '';

        if (data.trim() === 'success') {
            // Success message
            formMessage.innerHTML = '<p class="success-message">Message sent successfully!</p>';
            form.reset(); // Reset the form fields
        } else {
            // Error message
            formMessage.innerHTML = '<p class="error-message">Failed to send message. Try again.</p>';
        }

        // Remove message after 5 seconds
        setTimeout(() => {
            formMessage.innerHTML = '';
        }, 5000);
    })
    .catch(error => {
        // Handle network or other errors
        formMessage.innerHTML = '<p class="error-message">Error sending message. Please try again.</p>';
        console.error('Form submission error:', error);

        setTimeout(() => {
            formMessage.innerHTML = '';
        }, 5000);
    });
});
