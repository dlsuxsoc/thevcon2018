// faqs collapsable tab functions

$(document).ready(function(){
    var openedTab = "";
    $('h5').click(function(){
        $('#faqs p').css("display", "none");
        $('#faqs ol').css("display", "none");

        var answerID = $(this).attr("id");

        if(openedTab === answerID){
            $("#" + answerID + "-par").css("display", "none");

            if(answerID === 'faq-tab-three')
                $('#faqs ol').css("display", "none");

            openedTab = "";
        }

        else{
            openedTab = answerID;
            $("#" + answerID + "-par").css("display", "block");

            if(answerID === 'faq-tab-three')
                $('#faqs ol').css("display", "block");
        }
    });
});
