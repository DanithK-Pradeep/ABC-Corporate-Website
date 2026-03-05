const animatedElements = document.querySelectorAll(
  ".scroll-animation, .scroll-left, .scroll-right, .scroll-zoom"
);

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.25
});

animatedElements.forEach(el => observer.observe(el));
