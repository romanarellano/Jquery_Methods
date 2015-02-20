
var pTag = $( "p" );
var p;


$(function(){

/*
$()= factory function
Can take any string or object to be passed to the factory function to specify
a DOM structure.
*/
 
      $( ".wrap" ).click(function() {
      
          if ( pTag.parent().is( "div" ) ) {
             pTag.unwrap();
          } 

          else {
             pTag.wrap( "<div></div>" );
          }

     });

/*
Detach method same as remove but it keeps all jQuery data and events of the removed
elements.
It can be reinserted to the DOM at a later time.
*/

$( ".detach" ).click(function() {
      if ( p ) {
        p.appendTo( "body" );
        console.log(p);
        p = null;
      } else {
        p = $( "p,.names" ).detach();
      }
});

/*Remove method is similar to empty(). takes elements out of the DOM.
empties everything inside the element. jQuery data associated with element
is also removed.
 */
var a,h;
$(".remove").click(function(){

    a = $( ".names" ).remove();
    b = $("p").remove();
    
});

/*The empty() method removes all child nodes and content from the selected elements.
it does not accept any arguments
*/

$(".empty").click(function(){

   
       
      $(".names").empty();
      
    
   
});

/* Insert content, specified by the parameter, after each element in the 
 set of matched elements.
can input several arguments
*/


$(".after").click(function(){

    $(".names").after($("p"),"<b>WHAT? &nbsp</b>");
    $("b").css({

      "position":"absolute",
      "font-size":"50px",// 
      "color":"yellow"
    });
});

/* Insert content, specified by the parameter, before each element in the set
of matched elements
*/

$(".before").click(function(){

    $(".names").before($("p"));

});

// difference between after() and before() is in the syntax.

$(".insertAfter").click(function(){

    $("p").insertAfter(".names");

});

$(".insertBefore").click(function(){


     $("p").insertBefore($(".names"));

});




});