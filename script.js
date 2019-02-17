function highlightAbout() {
    $("#nav-about").click(function() {
        setTimeout( function() {
            $(".aboutme-section").addClass("highlight")
        }, 1000);
        setTimeout( function() {
            $(".aboutme-section").removeClass("highlight")
        }, 2000);
    });
}

function highlightProject() {
    $("#nav-project").click(function() {
        setTimeout( function() {
            $(".project-section").addClass("highlight")
        }, 1000);
        setTimeout( function() {
            $(".project-section").removeClass("highlight")
        }, 2000);
    });
}

function highlightContact() {
    $("#nav-contact").click(function() {
        setTimeout( function() {
            $("#contact").addClass("highlight-contact")
        }, 1000);
        setTimeout( function() {
            $("#contact").removeClass("highlight-contact")
        }, 2000);
    });
}

function highlightContactMe() {
    $("#nav-contact-me").click(function() {
        setTimeout( function() {
            $(".icon-responsive").addClass("highlight")
        }, 1000);
        setTimeout( function() {
            $(".icon-responsive").removeClass("highlight")
        }, 2000);
    });
}

$(function() {
    highlightAbout();
    highlightProject();
    highlightContact();
    highlightContactMe();
});