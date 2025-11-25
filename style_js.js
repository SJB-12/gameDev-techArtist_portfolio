const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll(".section");

function clearActive() {
  navLinks.forEach(link => link.classList.remove("active"));
}

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && entry.intersectionRatio > 0.45) {
        clearActive();
        const id = entry.target.id;
        const link = document.querySelector(`.nav-link[href="#${id}"]`);
        if (link) link.classList.add("active");
      }
    });
  },
  {
    threshold: [0.3, 0.45, 0.6],
    rootMargin: "-5% 0px -45% 0px"
  }
);

sections.forEach(section => observer.observe(section));

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    clearActive();
    link.classList.add("active");
    
    // Close mobile menu if open
    if (window.innerWidth <= 768) {
      document.querySelector('.sidebar').classList.remove('active');
    }
  });
});

// Mobile menu toggle
const mobileMenuToggle = document.createElement('button');
mobileMenuToggle.className = 'mobile-menu-toggle';
mobileMenuToggle.innerHTML = '☰';
document.body.appendChild(mobileMenuToggle);

mobileMenuToggle.addEventListener('click', () => {
  document.querySelector('.sidebar').classList.toggle('active');
});