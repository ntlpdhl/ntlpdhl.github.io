document.addEventListener("DOMContentLoaded", () => {
  
  // 1. SCROLL HIGH-CONTRAST HEADER EFFECT
  const navbar = document.querySelector(".glass-nav");
  
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.style.background = "rgba(255, 255, 255, 0.98)";
      navbar.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.04)";
    } else {
      navbar.style.background = "rgba(255, 255, 255, 0.85)";
      navbar.style.boxShadow = "none";
    }
  });

  /* ------------------------------------------------------------- */

  // 2. SCROLLSPY LOGIC
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".glass-nav .nav-link");

  window.addEventListener("scroll", () => {
    let currentSectionId = "";
    
    if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 60) {
      currentSectionId = "contact";
    } else {
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 140) {
          currentSectionId = section.getAttribute("id");
        }
      });
    }

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSectionId}`) {
        link.classList.add("active");
      }
    });
  });

  /* ------------------------------------------------------------- */

  // 3. SCROLL REVEAL (FADE-IN UP) ANIMATION
  const elementsToAnimate = document.querySelectorAll(
    ".about-section, .project-card, .contact-section"
  );

  elementsToAnimate.forEach((element) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(40px)";
    element.style.transition = "opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)";
  });

  const revealOnScrollObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
          observer.unobserve(entry.target);
        }
      });
    },
    {
      root: null,
      threshold: 0.1,
    }
  );

  elementsToAnimate.forEach((element) => {
    revealOnScrollObserver.observe(element);
  });
  
});