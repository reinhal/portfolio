function highlightAbout() {
    $("#nav-about").click(function() {
        $(".about-me-section").addClass("highlight")
        setTimeout( function() {
            $(".about-me-section").removeClass("highlight")
        }, 3000);
    });
}

function highlightProject() {
    $("#nav-project").click(function() {
        $(".project-section").addClass("highlight")
        setTimeout( function() {
            $(".project-section").removeClass("highlight")
        }, 3000);
    });
}

function highlightContact() {
    $("#nav-contact").click(function() {
        $(".contact-title").addClass("highlight-contact")
        setTimeout( function() {
            $(".contact-title").removeClass("highlight-contact")
        }, 3000);
    });
}

function highlightContactMe() {
    $("#nav-contact-me").click(function() {
        $(".contact-me").addClass("highlight")
        setTimeout( function() {
            $(".contact-me").removeClass("highlight")
        }, 3000);
    });
}

$(function() {
    highlightAbout();
    highlightProject();
    highlightContact();
    highlightContactMe();
});