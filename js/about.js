const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
  animateCounter(counter, 2000); // 2s animation
});

function animateCounter(counterEl, duration = 1000) {
  const target = +counterEl.getAttribute("data-target");
  let start = 0;
  const stepTime = Math.abs(Math.floor(duration / target));

  const timer = setInterval(() => {
    start += 1;
    counterEl.innerText = start;

    if (start >= target) {
      clearInterval(timer);
      counterEl.innerText = target; // final correction
    }
  }, stepTime);
}

