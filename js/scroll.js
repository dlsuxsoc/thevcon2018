// scrolling animation functions

$(document).ready(function(){
    var navHeight = $('nav').outerHeight();
    var sections = $('section');
    var contentWrappers = $('div.content-wrapper');
    var header = $('header');
    var footer = $('footer');

    $('div.content-wrapper').addClass('invisible');
    $('section').addClass('invisible');
    $('footer').addClass('invisible');

    $(window).scroll(function(){
        var windowScroll = $(this).scrollTop();
        for(var x = 0; x < sections.length; x++){
            if(windowScroll >= $(sections[x]).offset().top - 300){
                $(sections[x]).removeClass('invisible');
                $(sections[x]).addClass('show-visible');
            }
        }

        for(var x = 0; x < contentWrappers.length; x++){
            if(windowScroll >= $(contentWrappers[x]).offset().top - 500){
                $(contentWrappers[x]).removeClass('invisible');
                $(contentWrappers[x]).addClass('show-visible');
            }
        }

        if(windowScroll >= $(footer).offset().top - 500){
            $(footer).removeClass('invisible');
            $(footer).addClass('show-visible');
        }
    });
});
