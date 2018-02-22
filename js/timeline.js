// timline functions

$(document).ready(function(){
    var swipeIndex = 0;
    var points = $("div.ball");
    $("div.ball").click(function(){
        var targetInfo = $(this).attr("data-id");
        $("div.ball").removeClass("active");
        $(this).addClass("active");

        $("#history div.content-wrapper").addClass("inactive");
        $("#" + targetInfo).removeClass("inactive");

        swipeIndex = shiftIndex(targetInfo);
    });

    $("#history").on("swipeleft", function(){
        if(swipeIndex + 1 <= 16)
            swipeIndex++;

        var activeIndex = $(points[swipeIndex]).attr("data-id");
        $("div.ball").removeClass("active");
        $(points[swipeIndex]).addClass("active");

        $("#history div.content-wrapper").addClass("inactive");
        $("#" + activeIndex).removeClass("inactive");
    });

    $("#history").on("swiperight", function(){
        if(swipeIndex - 1 >= 0)
            swipeIndex--;

        var activeIndex = $(points[swipeIndex]).attr("data-id");
        $("div.ball").removeClass("active");
        $(points[swipeIndex]).addClass("active");

        $("#history div.content-wrapper").addClass("inactive");
        $("#" + activeIndex).removeClass("inactive");
    });

    $("#arrow-right").on("click", function(){
        if(swipeIndex + 1 <= 16)
            swipeIndex++;

        var activeIndex = $(points[swipeIndex]).attr("data-id");
        $("div.ball").removeClass("active");
        $(points[swipeIndex]).addClass("active");

        $("#history div.content-wrapper").addClass("inactive");
        $("#" + activeIndex).removeClass("inactive");
    });

    $("#arrow-left").on("click", function(){
        if(swipeIndex - 1 >= 0)
            swipeIndex--;

        var activeIndex = $(points[swipeIndex]).attr("data-id");
        $("div.ball").removeClass("active");
        $(points[swipeIndex]).addClass("active");

        $("#history div.content-wrapper").addClass("inactive");
        $("#" + activeIndex).removeClass("inactive");
    });
});

function shiftIndex(targetInfo){
    switch(targetInfo){
        case 'vcon-2001': return 0;
        case 'vcon-2002': return 1;
        case 'vcon-2003': return 2;
        case 'vcon-2004': return 3;
        case 'vcon-2005': return 4;
        case 'vcon-2006': return 5;
        case 'vcon-2007': return 6;
        case 'vcon-2008': return 7;
        case 'vcon-2009': return 8;
        case 'vcon-2010': return 9;
        case 'vcon-2011': return 10;
        case 'vcon-2012': return 11;
        case 'vcon-2013': return 12;
        case 'vcon-2014': return 13;
        case 'vcon-2015': return 14;
        case 'vcon-2016': return 15;
        case 'vcon-2017': return 16;
    }
}
