/* =====================================================
   NAV ACTIVE ON CLICK
===================================================== */
const navLinks = document.querySelectorAll(".nav-item");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");
  });
});

/* =====================================================
   NAV ACTIVE ON SCROLL (PRO LEVEL)
===================================================== */
const sections = document.querySelectorAll("section, .intro, .menu, .about, .contact");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.offsetHeight;

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

/* =====================================================
   MOBILE NAV TOGGLE (CLEAN VERSION)
===================================================== */
document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("nav");

  function openMenu() {
    navMenu.classList.add("navMenu-active");
  }

  function closeMenu() {
    navMenu.classList.remove("navMenu-active");
  }

  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("navMenu-active");
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      navMenu.classList.remove("navMenu-active");
    }
  });
});

/* =====================================================
   PARALLAX ENGINE (REQUEST ANIMATION FRAME)
===================================================== */
const butterflies = document.querySelectorAll(".butterfly");

let latestScroll = 0;
let ticking = false;

function parallaxUpdate() {
  butterflies.forEach((el, i) => {
    const speed = 0.08 + i * 0.05;
    el.style.transform = `translateY(${latestScroll * speed}px)`;
  });

  ticking = false;
}

window.addEventListener("scroll", () => {
  latestScroll = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(parallaxUpdate);
    ticking = true;
  }
});

/* =====================================================
   FADE-IN EFFECT ON SCROLL (EXTRA LAYER)
===================================================== */
const fadeElements = document.querySelectorAll(
  ".menu1, .about-data, .contact-data, .contact-form"
);

const fadeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.2 }
);

fadeElements.forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(40px)";
  el.style.transition = "all 0.8s ease";
  fadeObserver.observe(el);
});

/* =====================================================
   SMOOTH SCROLL FOR ANCHORS (POLISH)
===================================================== */
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  // Butterflies
  document.querySelectorAll(".butterfly").forEach((el, i) => {
    el.style.transform = `translateY(${scrollY * (0.1 + i * 0.05)}px)`;
  });

  // Shapes
  document.querySelectorAll(".shape").forEach((el, i) => {
    el.style.transform = `translateY(${scrollY * (0.03 + i * 0.02)}px)`;
  });

  // Icons
  document.querySelectorAll(".icon").forEach((el, i) => {
    el.style.transform = `translateY(${scrollY * (0.06 + i * 0.04)}px)`;
  });

  // Text
  const text = document.querySelector(".parallax-text");
  if (text) {
    text.style.transform = `translateY(${scrollY * 0.04}px)`;
  }
});
