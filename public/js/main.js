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
/*-----------------------------------------------------------------------------------*/
/*    End of JQuery functions 
/*-----------------------------------------------------------------------------------*/

let validation = () =>{
    alert('Thanks for your inquiry, I will get back to you soon');
    // Swal.fire({
    //     type: 'success',
    //     title:'Message Sent.',
    //     text: 'Thanks for your inquiry, I will get back to you soon'
    //   })

    //   document.getElementsByClassName('swal2-confirm').addEventListener('click',()=>{
    //       window.location.reload();
    //   });
}




