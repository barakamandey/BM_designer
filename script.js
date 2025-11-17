// ===== Animation des sections à l'apparition =====
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.2,
  }
);

sections.forEach((section) => {
  section.classList.add("hidden");
  observer.observe(section);
});

// ===== Effet de style sur le header au défilement =====
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    header.style.background = "rgba(10,10,10,0.95)";
    header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.6)";
  } else {
    header.style.background = "rgba(0,0,0,0.8)";
    header.style.boxShadow = "none";
  }
});

// ===== Lien actif dans la nav =====
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

// ===== Apparence douce au scroll =====
document.addEventListener("DOMContentLoaded", () => {
  const hiddenElements = document.querySelectorAll(".hidden");
  hiddenElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
  });
});

window.addEventListener("scroll", () => {
  const visibles = document.querySelectorAll(".visible");
  visibles.forEach((el) => {
    el.style.transition = "opacity 1s ease, transform 1s ease";
    el.style.opacity = "1";
    el.style.transform = "translateY(0)";
  });
});
