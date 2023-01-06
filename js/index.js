$(document).ready(function () {
    // ------------- For Change bg-colro of navbar when scroll down ----
    $(window).scroll(function () { 
        if(this.scrollY > 20) 
            $('.navbar').addClass('sticky');  
        else
            $('.navbar').removeClass('sticky');      
    });


    // ---- For mobile screen when click menu-toggler 
    $('.menu-toggler').click(function () { 
        $(this).toggleClass("active");
        $('.navbar-menu').toggleClass("active");        
    });


});