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
});
