document.addEventListener("DOMContentLoaded", function() {
  const flipContainers = document.querySelectorAll(".flip-container");
  flipContainers.forEach(function(container) {
    const flipper = container.querySelector(".flipper");
    flipper.addEventListener("click", function() {
      this.classList.toggle("flipped");
    });
  });
});