$(function () {

    /*===========MENU FIX===========*/
    var navoff = $('.menu').offset().top;

    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();

        if (scrolling > navoff) {
            $('.menu').addClass('menu_fix');
        } else {
            $('.menu').removeClass('menu_fix');
        }
    });


    /*===========MOBILE MENU===========*/
    $(document).ready(function() {

         $(".hs-menubar").hsMenu();

    });
    

    /*===========COUNTER===========*/
    jQuery(document).ready(function ($) {
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });
    });


    /*===========WOW===========*/
    new WOW().init();


    /*==========NICE SELECT============*/
    $('#select_js').niceSelect();



    /*==========ELEVATI ZOOM==========*/
    $(".zoom").elevateZoom();



    /*==========COUNNTDOWN==========*/
    $('[data-countdown]').each(function () {
        var $this = $(this),
            finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function (event) {
            $this.html(event.strftime('<div class="countdown_area"><div class="single_countdown"><p>%D</p><span>d</span></div><div class="single_countdown"><p>%H</p><span>h</span></div><div class="single_countdown"><p>%M</p><span>m</span></div><div class="single_countdown"><p>%S</p><span>s</span></div></div>'));
        });
    });



    /*==========NICE NUMBER==========*/
    $('input[type="number"]').niceNumber();



    /*==========DOB PLUGIN==========*/
    $.dobPicker({
        daySelector: '#dobday',
        /* Required */
        monthSelector: '#dobmonth',
        /* Required */
        yearSelector: '#dobyear',
        /* Required */
    });

    
    
    
    /*==========SCROLL BUTTON==========*/    
    $('.scroll_btn').on('click', function(){
        $('html, body').animate({
            scrollTop: 0,
        }, 3000);
    });
    
    $(window).on('scroll', function(){
        var scrolling = $(this).scrollTop();
        
        if(scrolling > 300){
            $('.scroll_btn').fadeIn();
           }
        
        else{
            $('.scroll_btn').fadeOut();
        }
    });
    
    
    
    





});
