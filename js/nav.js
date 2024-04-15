function openNav() {
    if(screen.width >= 850) {
        document.getElementById("mySidenav").style.width = "250px";
        // document.getElementById("mySidenav").style.height = "250px";
    }
    else {
        // document.getElementById("mySidenav").style.width = "100%";
        document.getElementById("mySidenav").style.height = "45%";
    }
}

function closeNav() {
    if(screen.width >= 850) {
        document.getElementById("mySidenav").style.width = "0";
        // document.getElementById("mySidenav").style.height = "0";
    }
    else {
        document.getElementById("mySidenav").style.height = "0";
    }
}

// document.addEventListener('DOMContentLoaded', function() {
//     document.querySelectorAll(".flip-box-inner").addEventListener("click", function() {
//         this.classList.toggle("flipped");
//     });
// });

document.addEventListener("DOMContentLoaded", function() {
  const flipContainers = document.querySelectorAll(".flip-box");
  flipContainers.forEach(function(container) {
    const flipper = container.querySelector(".flip-box-inner");
    flipper.addEventListener("click", function() {
      this.classList.toggle("flipped");
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const item1Width = document.querySelector(".box").offsetWidth;
  const item2 = document.querySelector(".disc");
  item2.style.width = `calc(60% * ${boxWidth}px)`;
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