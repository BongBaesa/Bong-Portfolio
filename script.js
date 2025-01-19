document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      },
      {
        threshold: 0.1
      }
    );
  
    const targets = document.querySelectorAll('.hero, .about-wrapper, .project-wrapper, .socials-wrapper, .projects ul li');
    
    targets.forEach(target => {
      observer.observe(target);
    });
  });