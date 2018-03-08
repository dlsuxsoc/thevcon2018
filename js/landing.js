$(document).ready(function(){
    $('.album-feed').css('display', 'none');
    $('#day-1').css('display', 'block');

    $('#day-menu button').click(function(){
        var targetDay = $(this).attr('data-id');
        $('.album-feed').css('display', 'none');
        $("#" + targetDay).css('display', 'block');

        $('#day-menu button').addClass('hallow-dark');
        $(this).removeClass('hallow-dark');
    });

    if(localStorage.vconLang == null)
        localStorage.vconLang = '0';

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
    $('#landing-nav').html(
    '<li><a href="#news">News</a></li>'+
    '<li><a href="#video">Video</a></li>'+
    '<li><a href="#gallery">Gallery</a></li>');

    $('#news-title').html('News & Updates');

    $('#article-wrapper').html('<h3 id="newsArticleMainTitle">'+
    '<p dir="LTR" style="text-align: left;">V-Malaysia 2018, Where Dreamers Unite as One Family</p>'+
    '</h3>'+
    '<div id="newsArticleContent" class="article">'+
    '<p dir="LTR" style="text-align: left;">Network marketing is more than a journey of fulfilling the goals of oneself. As it goes with the saying, “No man is an island.” This is the type of adventure where you let your uplines guide you. Keep in mind that your best interests are their passion. Let yourself create dreams bigger than anything you have in the past. Unravel your passion and believe that with help of QNET and The V, you are bound to become limitless. Step out of your comfort zone and tread into the challenge courageously. This April 24 to 28, 2018, gather with your fellow network marketing entrepreneurs and witness thousands of dreamers unite as one family.</p>'+
    '<p dir="LTR" style="text-align: left;">Come home to V-Malaysia 2018! See how the strength of one is the power of everybody, and how everybody’s power is the strength of one.</p>'+
    '<p dir="LTR" style="text-align: left;"><a href="http://the-v.net/vshoppe/product?title=v-malaysia-2018-ticket">Purchase your tickets now by heading to VShoppe!</a></p>'+
    '</div>');

    $('#news-title').html('News');
    $('#video-title').html('Video');
    $('#gallery-title').html('Gallery');

    $('#day-1-button').html('Day 1');
    $('#day-2-button').html('Day 2');
    $('#day-3-button').html('Day 3');
    $('#day-4-button').html('Day 4');
    $('#day-5-button').html('Day 5');
}

function toArabic(){

    $('#landing-nav').html(
    '<li><a href="#news">أخبار</a></li>'+
    '<li><a href="#video">فيديو</a></li>'+
    '<li><a href="#gallery">صالة عرض</a></li>');

    $('#news-title').html('أخبار ومستجدات');

    $('#article-wrapper').html('<h3 id="newsArticleMainTitle">'+
    '<p dir="RTL" style="text-align: right;">V-Malaysia 2018، حيث يتحد الحالمون كعائلة واحدة</p>'+
    '</h3>'+
    '<div id="newsArticleContent" class="article">'+
    '<p dir="RTL" style="text-align: right;">إن التسويق الشبكي هو أكثر من مجرد رحلة من أجل تحقيق هدف الفرد. كما تذكر المقولة، "لا أحد جزيرة منعزلة". هذا هو نوع المغامرة حيث تدع الأبلاينات يرشدونك. تذكر أن شغفهم هو تحقيق أفضل ما هو في صالحك. اسمح لنفسك بأن تخلق أحلاماً أكبر من أي شيء حظيت به في الماضي. أطلق شغفك وآمن أنه بمساعدة QNET وThe V فأنت مقدر لك أن تكون بلا حدود. أخرج من منطقة راحتك وسر نحو التحدي بشجاعة. في الفترة من 24 إلى 28 من أبريل المقبل 2018، تجمع مع رفاقك من المسوقين الشبكيين وكن شاهداً على اتحاد آلاف الحالمين كعائلة واحدة.</p>'+
    '<p dir="RTL" style="text-align: right;">تعال إلى الديار إلى V-Malaysia 2018! شاهد كيف أن قوة الفرد من قوة الجماعة، وكيف أن قوة الجماعة هي قوة للفرد.</p>'+
    '<p dir="RTL" style="text-align: right;"><a href="http://the-v.net/vshoppe/product?title=v-malaysia-2018-ticket">اشتر تذاكرك الآن من خلال التوجه إلى VShoppe!</a></p>'+
    '</div>');

    $('#news-title').html('أخبار');
    $('#video-title').html('فيديو');
    $('#gallery-title').html('صالة عرض');

    $('#day-1-button').html('1 '+'يوم');
    $('#day-2-button').html('2 '+'يوم');
    $('#day-3-button').html('3 '+'يوم');
    $('#day-4-button').html('4 '+'يوم');
    $('#day-5-button').html('5 '+'يوم');
}

function toTurkish(){
    $('#landing-nav').html(
    '<li><a href="#news">HABER</a></li>'+
    '<li><a href="#video">VİDEO</a></li>'+
    '<li><a href="#gallery">GALERİSİ</a></li>');

    $('#news-title').html('HABERLER & GÜNCELLEMELER');

    $('#article-wrapper').html('<h3 id="newsArticleMainTitle">'+
    '<p dir="LTR" style="text-align: left;">V-Malaysia 2018, Hayalperestlerin Bir Aile Olarak Biraraya Geldiği Yer</p>'+
    '</h3>'+
    '<div id="newsArticleContent" class="article">'+
    '<p dir="LTR" style="text-align: left;">Network pazarlaması, kendi hedeflerini gerçekleştirmenin bir yolculuğundan daha fazlasıdır. "Hiç kimse bir ada değildir" diyerek devam ettiğinden, üst hatlarınızın size rehberlik etmesine izin verdiğiniz macera türüdür. İlgi alanlarınızın tutkunuz olduğunu unutmayın. Kendinize geçmişinizde olanlardan daha büyük hayaller yaratın. Tutkunuzu çözün ve QNET ve The V\'nin yardımıyla sınırsız olacağınıza inanın. Konfor alanlarınızdan çıkın ve meydan okumaya cesaretle başlayın. Bu 24-28 Nisan 2018, diğer network pazarlama girişimcileriyle bir araya gelin ve binlerce hayalperestle bir aile olarak biraraya gelin.</p>'+
    '<p dir="LTR" style="text-align: left;">CV-Malaysia 2018\'e evinize gelin! Birinin gücünün, herkesin gücü olduğunu ve herkesin gücünün birinin gücü olduğunu görün.</p>'+
    '<p dir="LTR" style="text-align: left;"><a href="http://the-v.net/vshoppe/product?title=v-malaysia-2018-ticket">Şimdi VShoppe\'a gidip biletlerinizi satın alın!</a></p>'+
    '</div>');

    $('#news-title').html('HABER');
    $('#video-title').html('VİDEO');
    $('#gallery-title').html('GALERİSİ');

    $('#day-1-button').html('Gün 1');
    $('#day-2-button').html('Gün 2');
    $('#day-3-button').html('Gün 3');
    $('#day-4-button').html('Gün 4');
    $('#day-5-button').html('Gün 5');
}

function toFrench(){
    $('#landing-nav').html(
    '<li><a href="#news">ACTUALITÉS</a></li>'+
    '<li><a href="#video">VIDÉO</a></li>'+
    '<li><a href="#gallery">GALERIE</a></li>');

    $('#news-title').html('ACTUALITÉS ET MISES À JOUR');

    $('#article-wrapper').html('<h3 id="newsArticleMainTitle">'+
    '<p dir="LTR" style="text-align: left;">V-Malaysia 2018, là où les rêveurs s\'unissent comme une seule famille</p>'+
    '</h3>'+
    '<div id="newsArticleContent" class="article">'+
    '<p dir="LTR" style="text-align: left;">Le marketing de réseau est plus qu\'un voyage de réalisation des objectifs de soi. Comme le dit le proverbe, "Aucun homme n\'est une île." C\'est le genre d\'aventure où vous laissez vos filleuls vous guider. Gardez à l\'esprit que vos meilleurs intérêts sont leur passion. Créez des rêves plus grands que tout ce que vous aviez dans le passé. Découvrez votre passion et croyez qu\'avec l\'aide de QNET et The V, vous serez sans limites. Sortez de votre zone de confort et affrontez le défi avec courage. Du 24 au 28 avril 2018, retrouvez vos collègues entrepreneurs en marketing de réseau et voyez des milliers de rêveurs s\'unir comme une seule famille.</p>'+
    '<p dir="LTR" style="text-align: left;">Venez chez vous au V-Malaysia 2018! Voyez comment la force d\'un seul est le pouvoir de tous et comment le pouvoir de tous est la force d’un seul.</p>'+
    '<p dir="LTR" style="text-align: left;"><a href="http://the-v.net/vshoppe/product?title=v-malaysia-2018-ticket">Achetez vos billets maintenant en vous rendant sur VShoppe!</a></p>'+
    '</div>');

    $('#news-title').html('ACTUALITÉS');
    $('#video-title').html('VIDÉO');
    $('#gallery-title').html('GALERIE');

    $('#day-1-button').html('Jour 1');
    $('#day-2-button').html('Jour 2');
    $('#day-3-button').html('Jour 3');
    $('#day-4-button').html('Jour 4');
    $('#day-5-button').html('Jour 5');
}

function toRussian(){
    $('#landing-nav').html(
    '<li><a href="#news">НОВОСТИ</a></li>'+
    '<li><a href="#video">ВИДЕО</a></li>'+
    '<li><a href="#gallery">ГАЛЕРЕЯ</a></li>');

    $('#news-title').html('НОВОСТИ И ОБЪЯВЛЕНИЯ');

    $('#article-wrapper').html('<h3 id="newsArticleMainTitle">'+
    '<p dir="LTR" style="text-align: left;">V-Malaysia 2018, где мечтатели становятся одной семьей</p>'+
    '</h3>'+
    '<div id="newsArticleContent" class="article">'+
    '<p dir="LTR" style="text-align: left;">Сетевой маркетинг – это нечто большее, чем путь человека к целям, которые он сам перед собой и поставил. Говорят, что «один в поле не воин». Это такой вид приключения, когда ты позволяешь аплайну быть твоим гидом. Не забывай, что твои интересы – это также интересы твоего аплайна. Давай вместе мечтать о чем-то гораздо большем, чем когда-либо было в твоей жизни. Дай свободу своей страсти и поверь, что с помощью QNET и The V ты становишься на путь к безграничности. Бегом из зоны комфорта и вперед к испытаниям с присущей тебе смелостью. С 24 по 28 апреля 2018 ты встретишься с тысячами таких же предпринимателей в сетевом маркетинге, как и ты, чтобы объединиться вместе как одна семья.</p>'+
    '<p dir="LTR" style="text-align: left;">Приезжай домой на V-Malaysia 2018! Ты увидишь, как сила одного становится в могуществом каждого, а могущество каждого становится силой одного.</p>'+
    '<p dir="LTR" style="text-align: left;"><a href="http://the-v.net/vshoppe/product?title=v-malaysia-2018-ticket">Купи себе билет на сайте VShoppe!</a></p>'+
    '</div>');

    $('#news-title').html('НОВОСТИ');
    $('#video-title').html('ВИДЕО');
    $('#gallery-title').html('ГАЛЕРЕЯ');

    $('#day-1-button').html('день 1');
    $('#day-2-button').html('день 2');
    $('#day-3-button').html('день 3');
    $('#day-4-button').html('день 4');
    $('#day-5-button').html('день 5');
}

function toIndonesian(){
    $('#landing-nav').html(
    '<li><a href="#news">BERITA</a></li>'+
    '<li><a href="#video">VIDEO</a></li>'+
    '<li><a href="#gallery">GALERI</a></li>');

    $('#news-title').html('BERITA & UPDATE');

    $('#article-wrapper').html('<h3 id="newsArticleMainTitle">'+
    '<p dir="LTR" style="text-align: left;">V-Malaysia 2018, Dimana Para Pemimpi Bersatu Bagai Satu Keluarga</p>'+
    '</h3>'+
    '<div id="newsArticleContent" class="article">'+
    '<p dir="LTR" style="text-align: left;">Pemasaran jaringan lebih dari sekadar perjalanan memenuhi tujuan diri sendiri. Seperti ada pepatah yang mengatakan, "Tidak ada manusia adalah pulau." Ini adalah jenis petualangan di mana anda membiarkan upline anda membimbing anda. Ingatlah bahwa kepentingan terbaik anda adalah gairah mereka. Biarkan diri anda menciptakan mimpi yang lebih besar dari apapun yang anda miliki di masa lalu. Lepaskan semangat anda dan percayalah bahwa dengan bantuan QNET dan The V, anda pasti menjadi tak terbatas. Keluarlah dari zona nyaman anda dan melangkah ke tantangan dengan berani. Tanggal 24-28 April 2018 ini, berkumpul dengan sesama pengusaha pemasaran jaringan dan menyaksikan ribuan pemimpi bersatu bagai satu keluarga.</p>'+
    '<p dir="LTR" style="text-align: left;">Pulang ke V-Malaysia 2018! Lihatlah bagaimana kekuatan seseorang adalah kekuatan semua orang, dan bagaimana kekuatan setiap orang adalah kekuatan seseorang.</p>'+
    '<p dir="LTR" style="text-align: left;"><a href="http://the-v.net/vshoppe/product?title=v-malaysia-2018-ticket">Beli tiket anda sekarang dengan menuju ke VShoppe!</a></p>'+
    '</div>');

    $('#news-title').html('BERITA');
    $('#video-title').html('VIDEO');
    $('#gallery-title').html('GALERI');

    $('#day-1-button').html('Hari 1');
    $('#day-2-button').html('Hari 2');
    $('#day-3-button').html('Hari 3');
    $('#day-4-button').html('Hari 4');
    $('#day-5-button').html('Hari 5');
}
