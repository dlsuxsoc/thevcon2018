$(document).ready(function(){
    if(localStorage.vconLang == null)
        localStorage.vconLang = '0';

    $('#media-buttons button').click(function(){
        var mediaType = $(this).attr('id');

        if(mediaType === 'all')
            $('.thumbnail').css('display', 'block');

        else{
            $('.thumbnail').css('display', 'none');
            $("." + mediaType + "-thumbnail").css('display', 'block');
        }

        $('#media-buttons button').addClass('hallow-white');
        $(this).removeClass('hallow-white');
    });

    applyLanguage();
});

function applyLanguage(){
    //localStorage.vconLang = document.getElementById('chosen_lang').value;

    switch(localStorage.vconLang){
        case '0': toEnglish();
        break;

        case '1': toArabic();
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
}

function toEnglish(){
    $('#news-and-updates-title').html('NEWS & UPDATES');
    $('#all').html('ALL');
    $('#news').html('NEWS');
    $('#videos').html('VIDEOS');
    $('#gallery').html('GALLERY');
}

function toArabic(){
    $('#news-and-updates-title').html("أخبار ومستجدات");
    $('#all').html('الكل');
    $('#news').html('أخبار');
    $('#videos').html('فيديو');
    $('#gallery').html('صالة عرض');
}

function toTurkish(){
    $('#news-and-updates-title').html('HABERLER & GÜNCELLEMELER');
    $('#all').html('HERŞEY');
    $('#news').html('HABER');
    $('#videos').html('VİDEO');
    $('#gallery').html('GALERİSİ');
}

function toFrench(){
    $('#news-and-updates-title').html('ACTUALITÉS ET MISES À JOUR');
    $('#all').html('TOUT');
    $('#news').html('ACTUALITÉS');
    $('#videos').html('VIDÉO');
    $('#gallery').html('GALERIE');
}

function toRussian(){
    $('#news-and-updates-title').html('НОВОСТИ И ОБЪЯВЛЕНИЯ');
    $('#all').html('ВСЕ');
    $('#news').html('НОВОСТИ');
    $('#videos').html('ВИДЕО');
    $('#gallery').html('ГАЛЕРЕЯ');
}

function toIndonesian(){
    $('#news-and-updates-title').html('BERITA & UPDATE');
    $('#all').html('SEMUA');
    $('#news').html('BERITA');
    $('#videos').html('VIDEO');
    $('#gallery').html('GALERI');
}
