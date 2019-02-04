jQuery( document ).ready(function( $ ) {
"use strict"
/*-----------------------------------------------------------------------------------*/
/*    PORTFOLIO FILTER
/*-----------------------------------------------------------------------------------*/
$('#Container').mixItUp();

/*-----------------------------------------------------------------------------------*/
/*    Read More/Show Less functionality on resume page
/*-----------------------------------------------------------------------------------*/

$(".complete").hide()
$(".more-less").click(function(e){

    e.preventDefault();
    $(this).prev().slideToggle(); 
        if($(this).text()=="...Show Less"){
            $(this).text("...Show More");
        }else{
            $(this).text("...Show Less");
        }      
    });
});







