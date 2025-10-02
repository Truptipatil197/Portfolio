window.onload = function() { alert("Hello, Trupti! Welcome to your Portfolio 🎉"); }


// Theme toggle button (instant switch)
const themeToggleBtn = document.getElementById('themeToggleBtn');
function updateThemeToggleUI() {
  const isLight = document.body.classList.contains('light');
  themeToggleBtn.checked = isLight;
}
updateThemeToggleUI();
themeToggleBtn.addEventListener('change', () => {
  if (themeToggleBtn.checked) {
    document.body.classList.add('light');
  } else {
    document.body.classList.remove('light');
  }
  updateThemeToggleUI();
});

// Typing animation
const typed = document.querySelector('.typed');
const words = ["Trupti Patil", "Final Year CSE Student", "UI/UX Enthusiast", "Aspiring Web Developer"];
let i=0, j=0, currentWord='', isDeleting=false;
function type() {
  if(i>=words.length) i=0;
  currentWord = words[i];
  typed.textContent = currentWord.slice(0,j);
  if(!isDeleting && j<currentWord.length){ j++; setTimeout(type,150);}
  else if(isDeleting && j>0){ j--; setTimeout(type,100);}
  else{ isDeleting = !isDeleting; if(!isDeleting){i++;} setTimeout(type,800);}
}
type();

// Animate skill bars
const skillSpans = document.querySelectorAll('.skill-bar span');
function animateSkills() {
  skillSpans.forEach(span=>{
    const width = span.getAttribute('data-width');
    span.style.width = width;
  });
}
window.addEventListener('scroll', () => {
  const skillsSection = document.getElementById('skills');
  if(window.scrollY + window.innerHeight > skillsSection.offsetTop + 100){
    animateSkills();
  }
});
