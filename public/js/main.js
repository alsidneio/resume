jQuery( document ).ready(function( $ ) {
"use strict"
/*-----------------------------------------------------------------------------------*/
/*    PORTFOLIO FILTER
/*-----------------------------------------------------------------------------------*/
$('#Container').mixItUp();

$(".more-text").hide();
$(".read-more").on("click", function (e) {
        e.preventDefault();
        var txt = $(".content").is(':visible') ? 'Read More' : 'Show Less';
        $(".read-more").text(txt);
        $(this).('.more-text').slideToggle(200);
});

});







