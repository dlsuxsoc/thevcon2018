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

    //applyLanguage();
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
    $('#news-title').html('News');
    $('#video-title').html('Video');
    $('#gallery-title').html('Gallery');

    $('#news-link-1').attr('href', 'http://the-v.net/news?id=v-malaysia-2018-where-dreamers-unite-as-one-family');
    $('#news-thumbnail-1').html('V-Malaysia 2018, Where Dreamers Unite as One Family');
    $('#news-thumbnail-1').attr('dir', 'ltr');

    $('#day-1-button').html('Day 1');
    $('#day-2-button').html('Day 2');
    $('#day-3-button').html('Day 3');
    $('#day-4-button').html('Day 4');
    $('#day-5-button').html('Day 5');
}

function toArabic(){
    $('#news-title').html('أخبار');
    $('#video-title').html('فيديو');
    $('#gallery-title').html('صالة عرض');

    $('#news-link-1').attr('href', 'http://the-v.net/ar/news?id=v-malaysia-2018-where-dreamers-unite-as-one-family');
    $('#news-thumbnail-1').html('V-Malaysia 2018، حيث يتحد الحالمون كعائلة واحدة');
    $('#news-thumbnail-1').attr('dir', 'rtl');

    $('#day-1-button').html('1 '+'يوم');
    $('#day-2-button').html('2 '+'يوم');
    $('#day-3-button').html('3 '+'يوم');
    $('#day-4-button').html('4 '+'يوم');
    $('#day-5-button').html('5 '+'يوم');
}

function toTurkish(){
    $('#news-title').html('HABER');
    $('#video-title').html('VİDEO');
    $('#gallery-title').html('GALERİSİ');

    $('#news-link-1').attr('href', 'http://the-v.net/tr/news?id=v-malaysia-2018-where-dreamers-unite-as-one-family');
    $('#news-thumbnail-1').html('V-Malaysia 2018, Hayalperestlerin Bir Aile Olarak Biraraya Geldiği Yer');
    $('#news-thumbnail-1').attr('dir', 'ltr');

    $('#day-1-button').html('Gün 1');
    $('#day-2-button').html('Gün 2');
    $('#day-3-button').html('Gün 3');
    $('#day-4-button').html('Gün 4');
    $('#day-5-button').html('Gün 5');
}

function toFrench(){
    $('#news-title').html('ACTUALITÉS');
    $('#video-title').html('VIDÉO');
    $('#gallery-title').html('GALERIE');

    $('#news-link-1').attr('href', 'http://the-v.net/fr/news?id=v-malaysia-2018-where-dreamers-unite-as-one-family');
    $('#news-thumbnail-1').html('V-Malaysia 2018, là où les rêveurs s\'unissent comme une seule famille');
    $('#news-thumbnail-1').attr('dir', 'ltr');

    $('#day-1-button').html('Jour 1');
    $('#day-2-button').html('Jour 2');
    $('#day-3-button').html('Jour 3');
    $('#day-4-button').html('Jour 4');
    $('#day-5-button').html('Jour 5');
}

function toRussian(){
    $('#news-title').html('НОВОСТИ');
    $('#video-title').html('ВИДЕО');
    $('#gallery-title').html('ГАЛЕРЕЯ');

    $('#news-link-1').attr('href', 'http://the-v.net/ru/news?id=v-malaysia-2018-where-dreamers-unite-as-one-family');
    $('#news-thumbnail-1').html('V-Malaysia 2018, где мечтатели становятся одной семьей');
    $('#news-thumbnail-1').attr('dir', 'ltr');

    $('#day-1-button').html('день 1');
    $('#day-2-button').html('день 2');
    $('#day-3-button').html('день 3');
    $('#day-4-button').html('день 4');
    $('#day-5-button').html('день 5');
}

function toIndonesian(){
    $('#news-title').html('BERITA');
    $('#video-title').html('VIDEO');
    $('#gallery-title').html('GALERI');

    $('#news-link-1').attr('href', 'http://the-v.net/id/news?id=v-malaysia-2018-where-dreamers-unite-as-one-family');
    $('#news-thumbnail-1').html('V-Malaysia 2018, Dimana Para Pemimpi Bersatu Bagai Satu Keluarga');
    $('#news-thumbnail-1').attr('dir', 'ltr');

    $('#day-1-button').html('Hari 1');
    $('#day-2-button').html('Hari 2');
    $('#day-3-button').html('Hari 3');
    $('#day-4-button').html('Hari 4');
    $('#day-5-button').html('Hari 5');
}
