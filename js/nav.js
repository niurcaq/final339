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