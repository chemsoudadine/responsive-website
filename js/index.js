$(document).ready(function () {
    // ------------- For Change bg-colro of navbar when scroll down ----
    $(window).scroll(function () { 
        if(this.scrollY > 20){
            $('.navbar').addClass('sticky');  
            /* --- goTop Button ---*/
            $('.goTop').fadeIn();
        } 
        else{
            $('.navbar').removeClass('sticky');
            /* --- goTop Button Out---*/
            $('.goTop').fadeOut();      
        }
    });

    // --------When Click on ICON Arrow-up go on Top Page 0,0 ----
    $('.goTop').click(function() {
        scroll(0,0)        
    });

    // ---- For mobile screen when click menu-toggler 
    $('.menu-toggler').click(function () { 
        $(this).toggleClass("active");
        $('.navbar-menu').toggleClass("active");        
    });

    // ---- For scroll X images on Works section
    $(".works").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {enabled: true}
    });

});