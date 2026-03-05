let slides = document.querySelectorAll('.slide');
let wrapper = document.querySelector('.slides-wrapper');
let currentIndex = 0;
let totalSlides = slides.length;

function typeWriterEffect(element) {
  let text = element.getAttribute("data-text");
  element.textContent = ""; 
  let i = 0;

  function typing() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(typing, 60); // typing speed
    }
  }
  typing();
}

function showSlide(index) {
  wrapper.style.transform = `translateX(-${index * 100}%)`;

  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');

  // TYPEWRITER for the active slide
  let typeElement = slides[index].querySelector(".typewriter");
  typeWriterEffect(typeElement);
}


function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  showSlide(currentIndex);
}

// Auto slide every 3 seconds
setInterval(nextSlide, 6000);

// Arrow buttons
document.querySelector(".arrow.right").addEventListener("click", nextSlide);
document.querySelector(".arrow.left").addEventListener("click", prevSlide);

