$(document).ready(function(){
    $(window).scroll(function(){
        var navbar = $('.navbar');
        if($(window).scrollTop() >= navbar.height()){
            if(! (navbar.hasClass('scrolled'))){
                navbar.addClass('scrolled');
            }
        } else{
            navbar.removeClass('scrolled')
        }
    });

    //deal with taps
    $('.tap-switch li').click(function(){
        //Add selected class to active link
        $(this).addClass('selected').siblings().removeClass('selected');
        //hide all taps
        $('.taps .taps-content > div').hide();
        //show div connected with this link
        $('.' + $(this).data('class')).show();
        // $($(this).data('class')).show();         can do that and put the . in the data-class value 
        // window.console.log($(this).data('class'));
    });
});