jQuery(document).ready(function($) { 
    $(".scroll").click(function(event){        
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 800);
    });
});

$(function() { 
    var navMain = $(".navbar-collapse");

    navMain.on("click", "a:not([data-toggle])", null, function () {
        navMain.collapse('hide');
    });
});