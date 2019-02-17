function highlightAbout() {
    $("#nav-about").click(function() {
        setTimeout( function() {
            $(".about-me-section").addClass("highlight")
            $(".about-me-section").fadeIn(3000)
        }, 1000);
        setTimeout( function() {
            $(".about-me-section").removeClass("highlight")
        }, 3000);
    });
}

function highlightProject() {
    $("#nav-project").click(function() {
        setTimeout( function() {
            $(".project-section").addClass("highlight")
            $(".project-section").fadeIn(3000)
        }, 1000);
        setTimeout( function() {
            $(".project-section").removeClass("highlight")
        }, 3000);
    });
}

function highlightContact() {
    $("#nav-contact").click(function() {
        setTimeout( function() {
            $(".contact-title").addClass("highlight-contact")
            $(".contact-title").fadeIn(3000)
        }, 1000);
        setTimeout( function() {
            $(".contact-title").removeClass("highlight-contact")
        }, 3000);
    });
}

function highlightContactMe() {
    $("#nav-contact-me").click(function() {
        setTimeout( function() {
            $(".contact-me").addClass("highlight")
            $(".contact-me").fadeIn(3000)
        }, 1000);
        setTimeout( function() {
            $(".contact-me").removeClass("highlight")
        }, 4000);
    });
}

$(function() {
    highlightAbout();
    highlightProject();
    highlightContact();
    highlightContactMe();
});