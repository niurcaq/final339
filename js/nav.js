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

function openRA() {
    if(screen.width >= 850) {
        document.getElementById("RAnav").style.width = "250px";
        // document.getElementById("mySidenav").style.height = "250px";
    }
    else {
        // document.getElementById("mySidenav").style.width = "100%";
        document.getElementById("RAnav").style.height = "100%";
    }
}

function closeRA() {
    if(screen.width >= 850) {
        document.getElementById("RAnav").style.width = "0";
        // document.getElementById("mySidenav").style.height = "0";
    }
    else {
        document.getElementById("RAnav").style.height = "0";
    }
}

function openBB() {
    if(screen.width >= 850) {
        document.getElementById("BBnav").style.width = "250px";
        // document.getElementById("mySidenav").style.height = "250px";
    }
    else {
        // document.getElementById("mySidenav").style.width = "100%";
        document.getElementById("BBnav").style.height = "100%";
    }
}

function closeBB() {
    if(screen.width >= 850) {
        document.getElementById("BBnav").style.width = "0";
        // document.getElementById("mySidenav").style.height = "0";
    }
    else {
        document.getElementById("BBnav").style.height = "0";
    }
}

function openT() {
    if(screen.width >= 850) {
        document.getElementById("Tnav").style.width = "250px";
        // document.getElementById("mySidenav").style.height = "250px";
    }
    else {
        // document.getElementById("mySidenav").style.width = "100%";
        document.getElementById("Tnav").style.height = "100%";
    }
}

function closeT() {
    if(screen.width >= 850) {
        document.getElementById("Tnav").style.width = "0";
        // document.getElementById("mySidenav").style.height = "0";
    }
    else {
        document.getElementById("Tnav").style.height = "0";
    }
}

function openPP() {
    if(screen.width >= 850) {
        document.getElementById("PPnav").style.width = "250px";
        // document.getElementById("mySidenav").style.height = "250px";
    }
    else {
        // document.getElementById("mySidenav").style.width = "100%";
        document.getElementById("PPnav").style.height = "100%";
    }
}

function closePP() {
    if(screen.width >= 850) {
        document.getElementById("PPnav").style.width = "0";
        // document.getElementById("mySidenav").style.height = "0";
    }
    else {
        document.getElementById("PPnav").style.height = "0";
    }
}

function openYM() {
    if(screen.width >= 850) {
        document.getElementById("YMnav").style.width = "250px";
        // document.getElementById("mySidenav").style.height = "250px";
    }
    else {
        // document.getElementById("mySidenav").style.width = "100%";
        document.getElementById("YMnav").style.height = "100%";
    }
}

function closeYM() {
    if(screen.width >= 850) {
        document.getElementById("YMnav").style.width = "0";
        // document.getElementById("mySidenav").style.height = "0";
    }
    else {
        document.getElementById("YMnav").style.height = "0";
    }
}

function openMIT() {
    if(screen.width >= 850) {
        document.getElementById("MITnav").style.width = "250px";
        // document.getElementById("mySidenav").style.height = "250px";
    }
    else {
        // document.getElementById("mySidenav").style.width = "100%";
        document.getElementById("MITnav").style.height = "100%";
    }
}

function closeMIT() {
    if(screen.width >= 850) {
        document.getElementById("MITnav").style.width = "0";
        // document.getElementById("mySidenav").style.height = "0";
    }
    else {
        document.getElementById("MITnav").style.height = "0";
    }
}

function openR() {
    if(screen.width >= 850) {
        document.getElementById("Rnav").style.width = "250px";
        // document.getElementById("mySidenav").style.height = "250px";
    }
    else {
        // document.getElementById("mySidenav").style.width = "100%";
        document.getElementById("Rnav").style.height = "100%";
    }
}

function closeR() {
    if(screen.width >= 850) {
        document.getElementById("Rnav").style.width = "0";
        // document.getElementById("mySidenav").style.height = "0";
    }
    else {
        document.getElementById("Rnav").style.height = "0";
    }
}

function openLUV() {
    if(screen.width >= 850) {
        document.getElementById("LUVnav").style.width = "250px";
        // document.getElementById("mySidenav").style.height = "250px";
    }
    else {
        // document.getElementById("mySidenav").style.width = "100%";
        document.getElementById("LUVnav").style.height = "100%";
    }
}

function closeLUV() {
    if(screen.width >= 850) {
        document.getElementById("LUVnav").style.width = "0";
        // document.getElementById("mySidenav").style.height = "0";
    }
    else {
        document.getElementById("LUVnav").style.height = "0";
    }
}

function openJW() {
    if(screen.width >= 850) {
        document.getElementById("JWnav").style.width = "250px";
        // document.getElementById("mySidenav").style.height = "250px";
    }
    else {
        // document.getElementById("mySidenav").style.width = "100%";
        document.getElementById("JWnav").style.height = "100%";
    }
}

function closeJW() {
    if(screen.width >= 850) {
        document.getElementById("JWnav").style.width = "0";
        // document.getElementById("mySidenav").style.height = "0";
    }
    else {
        document.getElementById("JWnav").style.height = "0";
    }
}

function openKG() {
    if(screen.width >= 850) {
        document.getElementById("KGnav").style.width = "250px";
        // document.getElementById("mySidenav").style.height = "250px";
    }
    else {
        // document.getElementById("mySidenav").style.width = "100%";
        document.getElementById("KGnav").style.height = "100%";
    }
}

function closeKG() {
    if(screen.width >= 850) {
        document.getElementById("KGnav").style.width = "0";
        // document.getElementById("mySidenav").style.height = "0";
    }
    else {
        document.getElementById("KGnav").style.height = "0";
    }
}