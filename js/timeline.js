// timline functions

$(document).ready(function(){
    $("div.ball").click(function(){
        var targetInfo = $(this).attr("data-id");
        $("div.ball").removeClass("active");
        $(this).addClass("active");

        $("#history div.content-wrapper").addClass("inactive");
        $("#" + targetInfo).removeClass("inactive");
    });
});
