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
