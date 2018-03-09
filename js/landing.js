$(document).ready(function(){
    if(localStorage.vconLang == null)
        localStorage.vconLang = '0';

    else $("#chosen_lang").val(localStorage.vconLang);
    applyLanguage();

    $("#chosen_lang").change(applyLanguage);

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
    localStorage.vconLang = document.getElementById('chosen_lang').value;

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
    $('button.buy-tickets').html('BUY TICKETS');
    $('#news-and-updates-title').html('NEWS & UPDATES');
    $('#all').html('ALL');
    $('#news').html('NEWS');
    $('#videos').html('VIDEOS');
    $('#gallery').html('GALLERY');

    $('#news-link-1').attr('onclick', "window.location='http://the-v.net/news?id=v-malaysia-2018-where-dreamers-unite-as-one-family';");
    $('#news-link-1 .thumbnail-title').html('V-Malaysia 2018, Where Dreamers Unite as One Family');
    $('#news-link-1 .thumbnail-title').attr('dir', 'ltr');
}

function toArabic(){
    $('button.buy-tickets').html("اشتر تذكرة");
    $('#news-and-updates-title').html("أخبار ومستجدات");
    $('#all').html('الكل');
    $('#news').html('أخبار');
    $('#videos').html('فيديو');
    $('#gallery').html('صالة عرض');

    $('#news-link-1').attr('onclick', "window.location='http://the-v.net/ar/news?id=v-malaysia-2018-where-dreamers-unite-as-one-family';");
    $('#news-link-1 .thumbnail-title').html('V-Malaysia 2018، حيث يتحد الحالمون كعائلة واحدة');
    $('#news-link-1 .thumbnail-title').attr('dir', 'rtl');
}

function toTurkish(){
    $('button.buy-tickets').html('BİLET ALIN');
    $('#news-and-updates-title').html('HABERLER & GÜNCELLEMELER');
    $('#all').html('HERŞEY');
    $('#news').html('HABER');
    $('#videos').html('VİDEO');
    $('#gallery').html('GALERİSİ');

    $('#news-link-1').attr('onclick', "window.location='http://the-v.net/tr/news?id=v-malaysia-2018-where-dreamers-unite-as-one-family';");
    $('#news-link-1 .thumbnail-title').html('V-Malaysia 2018, Hayalperestlerin Bir Aile Olarak Biraraya Geldiği Yer');
    $('#news-link-1 .thumbnail-title').attr('dir', 'ltr');
}

function toFrench(){
    $('button.buy-tickets').html('DES BILLETS');
    $('#news-and-updates-title').html('ACTUALITÉS ET MISES À JOUR');
    $('#all').html('TOUT');
    $('#news').html('ACTUALITÉS');
    $('#videos').html('VIDÉO');
    $('#gallery').html('GALERIE');

    $('#news-link-1').attr('onclick', "window.location='http://the-v.net/fr/news?id=v-malaysia-2018-where-dreamers-unite-as-one-family';");
    $('#news-link-1 .thumbnail-title').html('V-Malaysia 2018, là où les rêveurs s\'unissent comme une seule famille');
    $('#news-link-1 .thumbnail-title').attr('dir', 'ltr');
}

function toRussian(){
    $('button.buy-tickets').html('КУПИТЬ БИЛЕТ');
    $('#news-and-updates-title').html('НОВОСТИ И ОБЪЯВЛЕНИЯ');
    $('#all').html('ВСЕ');
    $('#news').html('НОВОСТИ');
    $('#videos').html('ВИДЕО');
    $('#gallery').html('ГАЛЕРЕЯ');

    $('#news-link-1').attr('onclick', "window.location='http://the-v.net/ru/news?id=v-malaysia-2018-where-dreamers-unite-as-one-family';");
    $('#news-link-1 .thumbnail-title').html('V-Malaysia 2018, где мечтатели становятся одной семьей');
    $('#news-link-1 .thumbnail-title').attr('dir', 'ltr');
}

function toIndonesian(){
    $('button.buy-tickets').html('BELI TIKET');
    $('#news-and-updates-title').html('BERITA & UPDATE');
    $('#all').html('SEMUA');
    $('#news').html('BERITA');
    $('#videos').html('VIDEO');
    $('#gallery').html('GALERI');

    $('#news-link-1').attr('onclick', "window.location='http://the-v.net/id/news?id=v-malaysia-2018-where-dreamers-unite-as-one-family';");
    $('#news-link-1 .thumbnail-title').html('V-Malaysia 2018, Dimana Para Pemimpi Bersatu Bagai Satu Keluarga');
    $('#news-link-1 .thumbnail-title').attr('dir', 'ltr');
}
