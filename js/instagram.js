$(document).ready(function(){
    $(window).resize(function(){
        var windowSize = $(this).width();

        if(windowSize <= 837){
            $(".EmbedNew").attr("style", "background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:100% !important; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);");

            $("#instagram").css("background-color", "black");
        }
    });
});
