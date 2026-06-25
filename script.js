// ===== Responsive Navigation Toggle =====
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

// ===== Highlight Active Section in Navbar =====
const navLinks = document.querySelectorAll(".navbar a");
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// ===== Scroll Reveal Animations =====
const revealElements = document.querySelectorAll(
  ".home-content, .about-content, .edu-box, .skills-grid, .project-card, .achievement-list, .contact-details"
);

const revealOnScroll = () => {
  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (elementTop < windowHeight - 100) {
      el.classList.add("visible");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// ===== Scroll To Top Button =====
const scrollBtn = document.createElement("button");
scrollBtn.innerText = "↑";
scrollBtn.classList.add("scroll-top-btn");
document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ===== Typing Animation =====
const typingText = document.getElementById("typing-text");
const textToType = "SOFTWARE ENGINEER";
const typingSpeed = 120;
const pauseDuration = 1000;
let charIndex = 0;

const typeLoop = () => {
  typingText.textContent = textToType.slice(0, charIndex);
  charIndex++;
  if (charIndex <= textToType.length) {
    setTimeout(typeLoop, typingSpeed);
  } else {
    setTimeout(() => {
      charIndex = 0;
      setTimeout(typeLoop, typingSpeed);
    }, pauseDuration);
  }
};

typeLoop();


