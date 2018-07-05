// Use jQueryto change the font color of the header when the mouse hovers; 
// when the mouse stops hovering, return to the original color.



$(document).ready(function(){
    $("p").hover(function(){
        $(this).css("color", "red");
        }, function(){
        $(this).css("color", "black");
    });
});

$(document).ready(function(){
    $("p").click(function(){
        $("p").text("jQuery is a fast, JavaScript library that makes " +
        "many tasks easier and simpler to accomplish. A JavaScript " +
        "library contains pre-written JavaScript which makes developing " +
        "applications a bit easier for the developer. This means jQuery " +
        "is not a language, but an extension of JavaScript. It takes many " +
        "lines of JavaScript code, which we would have had to write ourselves " +
        "before jQuery, and compresses it.");
    });
});

$(document).ready(function(){    
    $(".list-group-item").dblclick(function(){
    $(this).hide();
    });
});

$(document).ready(function(){
    $("input").keydown(function(){
        $("input").css("color", "red");
    });
});
