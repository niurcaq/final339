function openNav() {
    if(screen.width >= 1200) {
        document.getElementById("mySidenav").style.width = "250px";
    }
    else {
        // document.getElementById("mySidenav").style.width = "100%";
        document.getElementById("mySidenav").style.height = "45%";
    }
}

function closeNav() {
    if(screen.width >= 1200) {
        document.getElementById("mySidenav").style.width = "0";
        // document.getElementById("mySidenav").style.height = "0";
    }
    else {
        document.getElementById("mySidenav").style.height = "0";
    }
}

document.addEventListener("DOMContentLoaded", function() {
  const flipContainers = document.querySelectorAll(".flip-box");
  flipContainers.forEach(function(container) {
    const flipper = container.querySelector(".flip-box-inner");
    flipper.addEventListener("click", function() {
      this.classList.toggle("flipped");
    });
  });
});


function openRA() {
    if(screen.width >= 850) {
        document.getElementById("RAnav").style.width = "40%";
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
        document.getElementById("BBnav").style.width = "40%";
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
        document.getElementById("Tnav").style.width = "40%";
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
        document.getElementById("PPnav").style.width = "40%";
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
        document.getElementById("YMnav").style.width = "40%";
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
        document.getElementById("MITnav").style.width = "40%";
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
        document.getElementById("Rnav").style.width = "40%";
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
        document.getElementById("LUVnav").style.width = "40%";
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
        document.getElementById("JWnav").style.width = "40%";
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
        document.getElementById("KGnav").style.width = "40%";
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


document.addEventListener("DOMContentLoaded", function() {
    var hiddenD = document.getElementById('hideD');
    var shownD = document.getElementById('showD');

    shownD.addEventListener('click', function() {
    if (hiddenD.style.display === 'grid') {
        hiddenD.style.display = 'none';
        shownD.innerHTML = "&or;"
    } else {
        hiddenD.style.display = 'grid';
        shownD.innerHTML = "&and;";
    }
    });

    var hiddenE = document.getElementById('hideE');
    var shownE = document.getElementById('showE');

    shownE.addEventListener('click', function() {
    if (hiddenE.style.display === 'grid') {
        hiddenE.style.display = 'none';
        shownE.innerHTML = "&or;"
    } else {
        hiddenE.style.display = 'grid';
        shownE.innerHTML = "&and;";
    }
    });

    var hiddenR = document.getElementById('hideR');
    var shownR = document.getElementById('showR');

    shownR.addEventListener('click', function() {
    if (hiddenR.style.display === 'grid') {
        hiddenR.style.display = 'none';
        shownR.innerHTML = "&or;"
    } else {
        hiddenR.style.display = 'grid';
        shownR.innerHTML = "&and;";
    }
    });

    var hiddenN = document.getElementById('hideN');
    var shownN = document.getElementById('showN');

    shownN.addEventListener('click', function() {
    if (hiddenN.style.display === 'grid') {
        hiddenN.style.display = 'none';
        shownN.innerHTML = "&or;"
    } else {
        hiddenN.style.display = 'grid';
        shownN.innerHTML = "&and;";
    }
    });

    var hiddenHH = document.getElementById('hideHH');
    var shownHH = document.getElementById('showHH');

    shownHH.addEventListener('click', function() {
    if (hiddenHH.style.display === 'grid') {
        hiddenHH.style.display = 'none';
        shownHH.innerHTML = "&or;"
    } else {
        hiddenHH.style.display = 'grid';
        shownHH.innerHTML = "&and;";
    }
    });

    var hiddenMM = document.getElementById('hideMM');
    var shownMM = document.getElementById('showMM');

    shownMM.addEventListener('click', function() {
    if (hiddenMM.style.display === 'grid') {
        hiddenMM.style.display = 'none';
        // $("hiddenMMshow").fadeIn(1500);
        shownMM.innerHTML = "&or;"
    } else {
        hiddenMM.style.display = 'grid';
        shownMM.innerHTML = "&and;";
    }
    });

    var hiddenP = document.getElementById('hideP');
    var shownP = document.getElementById('showP');

    shownP.addEventListener('click', function() {
    if (hiddenP.style.display === 'grid') {
        hiddenP.style.display = 'none';
        shownP.innerHTML = "&or;"
    } else {
        hiddenP.style.display = 'grid';
        shownP.innerHTML = "&and;";
    }
    });

    var hiddenUL = document.getElementById('hideUL');
    var shownUL = document.getElementById('showUL');

    shownUL.addEventListener('click', function() {
    if (hiddenUL.style.display === 'grid') {
        hiddenUL.style.display = 'none';
        shownUL.innerHTML = "&or;"
    } else {
        hiddenUL.style.display = 'grid';
        shownUL.innerHTML = "&and;";
    }
    });
});