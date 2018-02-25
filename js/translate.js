$(document).ready(function(){
    if(localStorage.vconLang == null)
        localStorage.vconLang = '0';

    //else $("#chosen_lang").val(localStorage.vconLang);
    applyLanguage();

    //$("#chosen_lang").change(applyLanguage);
});

function applyLanguage(){
    //localStorage.vconLang = document.getElementById('chosen_lang').value;

    switch(localStorage.vconLang){
        case '0': toEnglish();
        $('#vcon-2001-par').show();
        $('#arabic-2001-par').hide();
        break;

        case '1': toArabic();
        /*
        $("p").addClass('arabic-read');
        $("h1").addClass('arabic-read');
        $("h2").addClass('arabic-read');
        $("h3").addClass('arabic-read');
        $("h4").addClass('arabic-read');
        $("h5").addClass('arabic-read');
        $("h6").addClass('arabic-read');
        $("#faqs p").addClass('arabic-read');
        $("#faqs ol").addClass('arabic-read');
        $("#history div.content-wrapper").addClass('arabic-read');

        $("#call-to-action h1").removeClass('arabic-read');
        $("#call-to-action p").removeClass('arabic-read');
        $("#room-reservation h1").removeClass('arabic-read');
        $("#room-reservation p").removeClass('arabic-read');
        $("#instagram h1").removeClass('arabic-read');
        */
        break;

        case '2': toTurkish();
        break;

        case '3': toFrench();
        break;

        case '4': toRussian();
        break;

        case '5': toIndonesian();
        break;
    }
    /*
    if(mode != '1'){
        $("p").removeClass('arabic-read');
        $("h1").removeClass('arabic-read');
        $("h2").removeClass('arabic-read');
        $("h3").removeClass('arabic-read');
        $("h4").removeClass('arabic-read');
        $("h5").removeClass('arabic-read');
        $("h6").removeClass('arabic-read');
        $("#faqs ol").removeClass('arabic-read');
        $("#history div.content-wrapper").removeClass('arabic-read');
    }
    */
}

function toEnglish(){
    $('#all-tab').html('All');
    $('#news-tab').html('NEWS');
    $('#videos-tab').html('VIDEOS');
    $('#gallery-tab').html('GALLERY');

    $('#news-title').html('NEWS');
    $('button.buy-tickets').html("BUT TICKETS");
    $('#back-button').html("Back to V-CON 2018");
}

function toArabic(){
    $('#all-tab').html('الكل');
    $('#news-tab').html('أخبار');
    $('#videos-tab').html('فيديو');
    $('#gallery-tab').html('صالة عرض');

    $('#news-title').html('أخبار');
    $('button.buy-tickets').html("اشتر تذكرة");
    $('#back-button').html('V-Con 2018');
    $('#back-button').append("ارجع الى");
}

function toTurkish(){
    $('#all-tab').html('HERŞEY');
    $('#news-tab').html('HABER');
    $('#videos-tab').html('VİDEO');
    $('#gallery-tab').html('GALERİSİ');

    $('#news-title').html('HABER');
    $('button.buy-tickets').html('BİLET ALIN');
    $('#back-button').html("V-CON 2018'e geri dön");
}

function toFrench(){
    $('#all-tab').html('TOUT');
    $('#news-tab').html('ACTUALITÉS');
    $('#videos-tab').html('VIDÉO');
    $('#gallery-tab').html('GALERIE');

    $('#news-title').html('ACTUALITÉS');
    $('button.buy-tickets').html('ACHETER UN BILLET');
    $('#back-button').html("Retour à V-CON 2018");
}

function toRussian(){
    $('#all-tab').html('ВСЕ');
    $('#news-tab').html('НОВОСТИ');
    $('#videos-tab').html('ВИДЕО');
    $('#gallery-tab').html('ГАЛЕРЕЯ');

    $('#news-title').html('НОВОСТИ');
    $('button.buy-tickets').html('КУПИТЬ БИЛЕТ');
    $('#back-button').html("Вернуться к V-CON 2018");
}

function toIndonesian(){
    $('#all-tab').html('SEMUA');
    $('#news-tab').html('BERITA');
    $('#videos-tab').html('VIDEO');
    $('#gallery-tab').html('GALERI');

    $('#news-title').html('BERITA');
    $('button.buy-tickets').html('BELI TIKET');
    $('#back-button').html("Kembali ke V-CON 2018");
}
