jQuery( document ).ready(function( $ ) {
"use strict"
/*-----------------------------------------------------------------------------------*/
/*    PORTFOLIO FILTER
/*-----------------------------------------------------------------------------------*/
$('#Container').mixItUp();

/*-----------------------------------------------------------------------------------*/
/*    Read More/Show Less functionality on resume page
/*-----------------------------------------------------------------------------------*/

$(".complete").toggle(); 
$(".more-less").click(function(){
    $(".complete").toggle(); 
        if($(this).text()=="...Show Less"){
            $(this).text("...Show More");
        }else{
            $(this).text("...Show Less");
        }      
    });
    // let text= $(".read-more").text();

    // let lessText=text.substr(0,100)

    // if(text.length > 100){
    //     $(".read-more").text(lessText);
    //     $(".read-more").append("<a href='' class='read-more-link'> ...Show More </a>");
    // }else{
    //     $(".read-more").text(text);
    // }

    // $(".read-more-link").click(function(e){
    //     e.preventDefault();
    //     $(this).parent().text(text).append("<a href='' class='show-less-link'> ...Show Less </a>");
    // });

    // $(".show-less-link").click(function(e){
    //     e.preventDefault();
    //     $(this).parent().text(lessText).append("<a href='' class='read-more-link'> ...Show More</a>");

    // });

});







