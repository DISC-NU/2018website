$(function(){
   $(".menu").click(function(){
       $(".menu").toggleClass("clicked");
       $(".menu-nav").toggleClass("menu-vis");
       $(".dark").toggleClass("dark-vis");
       $("#line-1").toggleClass("line-1-clicked");
       $("#line-2").toggleClass("line-2-clicked");
       $("#line-3").toggleClass("line-3-clicked");
       $("#line-4").toggleClass("line-4-clicked");
       $("#line-5").toggleClass("line-5-clicked");
   });
    
   $(".dark").click(function(){
       $(".menu").toggleClass("clicked");
       $(".menu-nav").toggleClass("menu-vis");
       $(".dark").toggleClass("dark-vis");
       $("#line-1").toggleClass("line-1-clicked");
       $("#line-2").toggleClass("line-2-clicked");
       $("#line-3").toggleClass("line-3-clicked");
       $("#line-4").toggleClass("line-4-clicked");
       $("#line-5").toggleClass("line-5-clicked");
   });

});