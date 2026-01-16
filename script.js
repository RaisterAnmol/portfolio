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
    if(rect.top<windowHeight-10) el.classList.add("in");
  });
};
window.addEventListener("scroll", revealOnScroll);
revealOnScroll();


// Select form and message container
