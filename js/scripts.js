// navigatie
function myFunction() {

    var x = document.getElementById("unfold");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
var topnav = document.querySelector
}


// Naar top van scherm

// knop verschijnt als je 500 px naar beneden gaat
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// Terug naar boven wanneer je klikt
function topFunction() {
    document.body.scrollTop = 0; // Chrome, Safari en Opera 
    document.documentElement.scrollTop = 0; // IE en Firefox
}
