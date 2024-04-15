// document.addEventListener("DOMContentLoaded", function() {
//   const flipContainers = document.querySelectorAll(".flip-container");
//   flipContainers.forEach(function(container) {
//     const flipper = container.querySelector(".flipper");
//     flipper.addEventListener("click", function() {
//       this.classList.toggle("flipped");
//     });
//   });
// });

document.addEventListener("DOMContentLoaded", function() {
  const flipContainers = document.querySelectorAll(".flip-container");

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2 // Trigger animation when 20% of the box is visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  flipContainers.forEach(container => {
    observer.observe(container);
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2 // Trigger animation when 20% of the box is visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelector('.text').classList.add("animate");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const imageContainers = document.querySelectorAll(".image-container");
  imageContainers.forEach(container => {
    observer.observe(container);
  });
});