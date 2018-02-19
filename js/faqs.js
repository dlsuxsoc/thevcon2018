// faqs collapsable tab functions

$(document).ready(function(){
    $('h5').click(function(){
        $('#faqs p').css("display", "none");
        $('#faqs ol').css("display", "none");
        var answerID = $(this).attr("id");
        $("#" + answerID + "-par").css("display", "block");

        if(answerID === 'faq-tab-three')
            $('#faqs ol').css("display", "block");
    });
});
