document.addEventListener("DOMContentLoaded", function() {
  let currentIndex = 0;
  const slides = document.querySelector(".slides");
  const totalSlides = slides.children.length;
  const slideWidth = slides.children[0].offsetWidth;
  const pagination = document.querySelector(".slider-pagination");

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    updatePagination();
  }

  function updatePagination() {
    const buttons = pagination.querySelectorAll("button");
    buttons.forEach((button, index) => {
      if (index === currentIndex) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  }

  // Create pagination buttons
  for (let i = 0; i < totalSlides; i++) {
    const button = document.createElement("button");
    button.addEventListener("click", () => {
      currentIndex = i;
      slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
      updatePagination();
    });
    const listItem = document.createElement("li");
    listItem.appendChild(button);
    pagination.appendChild(listItem);
  }

  // Set interval for sliding
  setInterval(nextSlide, 3000); // Change 3000 to desired time in milliseconds (3 seconds in this case)
});
