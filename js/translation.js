$(document).ready(function(){
    $("#chosen_lang").change(function(){
        var mode = this.value;

        switch(mode){
            case '0': toEnglish();
            break;

            case '1': toArabic();
            $("p").addClass('arabic-read');
            $("h1").addClass('arabic-read');
            $("h2").addClass('arabic-read');
            $("h3").addClass('arabic-read');
            $("h4").addClass('arabic-read');
            $("h5").addClass('arabic-read');
            $("h6").addClass('arabic-read');
            $("#faqs ol").addClass('arabic-read');

            $("#call-to-action h1").removeClass('arabic-read');
            $("#call-to-action p").removeClass('arabic-read');
            $("#room-reservation h1").removeClass('arabic-read');
            $("#room-reservation p").removeClass('arabic-read');
            $("#instagram h1").removeClass('arabic-read');
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

        if(mode != '1'){
            $("p").removeClass('arabic-read');
            $("h1").removeClass('arabic-read');
            $("h2").removeClass('arabic-read');
            $("h3").removeClass('arabic-read');
            $("h4").removeClass('arabic-read');
            $("h5").removeClass('arabic-read');
            $("h6").removeClass('arabic-read');
        }
    });
});

function toEnglish(){
    $('button.buy-tickets').html('BUY TICKETS');
    $('#btn-apollo').html('SEARCH APOLLO NOW');
    $('.see-more').html('<a href="https://www.instagram.com/explore/tags/vcon18/" target="_blank">See more...</a>');

    $('#ct-days').html('Days');
    $('#ct-hours').html('Hours');
    $('#ct-mins').html('Minutes');
    $('#ct-secs').html('Seconds');

    $('#tagline').html('Look no further. Keep going and change your life forever.');
    $('#about-title').html('WHO, WHAT, WHY');
    $('#about-what').html('<b>WHAT</b> is V-Con?');
    $('#about-what-p').html('V-Con is an experience that is often equated with the words unbelievable, magical, and life-changing. Held in nine different countries since its conception in 2001, the V-Convention is an annual grand gathering hosted by The V, where you can expect a series of world-class motivational speeches and training sessions that are essential for professional networkers. State-of-the-art exhibitions are also set up for those who wish to get exclusive merchandise, know more about products, and avail of special promos.');
    $('#about-who').html('<b>WHO</b> goes to V-Con?');
    $('#about-who-p').html('It is open to all IRs of QNET who wish to gain a better sense of their network marketing journey. To date, V-Con has gathered thousands of attendees from different parts of world, with record-breaking numbers to boot.');
    $('#about-why').html('<b>WHY</b> do you need to be at V-Con?');
    $('#about-why-p').html('As a partner who will be with you throughout your network marketing journey, The V aims to maximize this 5-day convention to help you claim your ultimate goal of gaining financial freedom. Whether you just signed up or have been in the business for several years, you have no better decision but to come home to V-Con and realize your limitless potential for greatness.');

    $('#history-title').html('V-CON THROUGH HISTORY');
    $('#history-tagline').html("Before our 26th V-Con this coming 24 to 28 April 2018 at SPICE Arena in Penang Malaysia, here's where we've been changing lives since 2001");

    $('#vcon-2001-title').html('V-Con Bali 2001');
    $('#vcon-2001-par').html("We saw the birth of the V's biggest and most anticipated event: The V-Convention, or V-Con. From less than a hundred participants in the initial event in <b>Bali, Indonesia,</b> today's V-Cons are attended by more than fifteen thousand participants representing as much as 80 countries around the world.");

    $('#vcon-2002-title').html('V-Con Goa 2002');
    $('#vcon-2002-par').html('With 500 participants from different parts of the world, the 2002 V-Con in India showcased the theme "The Essence of Leadership". With the attention it drew, V-Con Goa was held twice to accommodate all the participants who wanted to take part in such an amazing experience.');

    $('#vcon-2003-title').html('V-Con Kota Kinabalu 2003');
    $('#vcon-2003-par').html('In 2003, V-Con made its way to Kota Kinabalu, Sabah, Malaysia, where it gathered over 500 participants from 26 different countries. It paraded with the theme, "The Essence of Success."');

    $('#vcon-2004-title').html('V-Dubai 2004 and Euro V-Con 2004');
    $('#vcon-2004-par').html('V-Dubai in 2004 marked the 6th anniversary of the company, where over 700 participants attended. On the same year, The V held its first <b>V-Con in Europe at the Rodos Palace Hotel in the island of Rhodes, Greece</b>. From June 6 to 9 2004, 200 participants gathered to open a new network in Europe.');

    $('#vcon-2005-title').html('V-Thailand 2005');
    $('#vcon-2005-par').html("V-Thailand 2005 featured activities that highlighted our passion for developing world-class leadership and excellence. Since The V believed in starting them young, a special event catering to our leaders' young children kicked off at V-Thailand. The event now known as V-Kids started with a small group of children handled by spouses of our V-Partners and other V-Ambassadors.");

    $('#vcon-2006-title').html('V-Malaysia 2006 and Euro V-Con Madrid 2006');
    $('#vcon-2006-par').html("Marked as the 7th V-Convention, V-Malaysia 2006 was held at Sunway Pyramid Convention Center and bore the theme, \"Over The Top\". Two years after their first European V-Con, The V also embarked in an intensive expansion program designed especially for the European market on the same year. Euro-VCon Madrid also served to celebrate two other milestones in the company's history: (1) the 8th anniversary of the founding of the Qi Group of Companies; and (2) Qi's title sponsorship of the 2006 International Badminton Federation (IBF) World Championships—which served as a firm statement of the company's credibility, prestige and stability.");

    $('#vcon-2007-title').html('V-Jakarta 2007 and V-Africa 2007');
    $('#vcon-2007-par').html('With over 3,000 participants from 40 different countries, V-Jakarta 2007 was held at the Jakarta Convention Center, where The V strengthened its passion for the network’s success. In the same year, The V brought its much talked about event to Kenya and successfully held V-Africa 2007, gathering over 2,000 participants.');

    $('#vcon-2008-title').html('V-Malaysia 2008 and V-Africa 2008');
    $('#vcon-2008-par').html('The company celebrated its 10th anniversary. One of the highlights of V-Con held at the Penang International Sports Arena from the 21st to 25th of May in 2008 was the V-Kids Convention where over 124 children of different ages and nationalities were treated to three days of fun and learning. Aside from the V-Kids Convention, other highlights of the convention included the spectacular Gala and Welcome Night and an exhibit that showcased the whole gamut of products and services from The V and its sister companies. Uganda in East Africa, Kampala also became the talk of the town as V-Africa was held in the same year, with 1,600 participants.');

    $('#vcon-2009-title').html('V-Malaysia 2009');
    $('#vcon-2009-par').html('Held in Shah Alam, Malaysia, this V-Con carried the theme "Change Begins."');

    $('#vcon-2010-title').html('V-Malaysia 2010');
    $('#vcon-2010-par').html('Motivational speaker born with tetra-amelia syndrome, Nick Vujicic spoke at V-Malaysia 2010.');

    $('#vcon-2011-title').html('V-Malaysia 2011');
    $('#vcon-2011-par').html('In 2011, V-Con heralded with the theme, "Belief."');

    $('#vcon-2012-title').html('V-Indonesia 2012');
    $('#vcon-2012-par').html('V-Con once again found a home in Jakarta, Indonesia for V-Indonesia 2012, where it had "Make A Difference" as compelling theme.');

    $('#vcon-2013-title').html('V-Malaysia 2013');
    $('#vcon-2013-par').html('Dreamers from all parts of the globe gathered once again in Malaysia in 2013 for V-Malaysia 2013, which headlined as "RYTHM Nation."');

    $('#vcon-2014-title').html('V-Malaysia 2014');
    $('#vcon-2014-par').html("This year, V-Con took on a theme that called upon dreamers to \"Arise. Awake. Achieve.\" It was also the very first V-Con that proudly introduced QNET's place in the world of football after signing with Manchester City Football Club as its exclusive direct selling partner.");

    $('#vcon-2015-title').html('V-Malaysia 2015 and V-UAE 2015');
    $('#vcon-2015-par').html("As a pivotal year for the network and the company, the 2015 V-Con took on \"Game Changer\" as theme. It was also the advent of The V's continuing streak in holding two V-Conventions every year, with the first in Penang, Malaysia, and the second one in Dubai, UAE.");

    $('#vcon-2016-title').html('V-Malaysia 2016 and V-UAE 2016');
    $('#vcon-2016-par').html('A record breaking number of delegates attended V-Malaysia in Penang. The arena was filled to the rafters with over fifteen thousand participants, echoing the theme "Evolve. Empower. Enrich." Anil Kapoor, an Indian actor and producer who has appeared in countless Bollywood and international films; Jackie Shroff who has been in the Hindi cinema for almost four decades and has appeared in 207 films in nine languages; and Vivek Oberoi who made his Hindi film debut went up on the V-UAE stage in 2016 to share how they took the big leap to be where they are today.');

    $('#vcon-2017-title').html('V-Malaysia 2017 and V-UAE 2017');
    $('#vcon-2017-par').html('For the 3rd straight year, V-Con was held in both Penang, Malaysia and Dubai, UAE, with both record-breaking attendance. A rousing "DO IT NOW" theme headlined the two V-Conventions. Muniba Mazari, an inspirational woman whose life story drew much love and admiration from thousands of dreamers at V-Malaysia and V-UAE, added to a growing list of superstars that joined our family to be part of an unbelievable V-Con experience.');

    $('#cta-title').html('We Are One');
    $('#cta-par').html('Get to know the family. Enter our home. Follow the calling. If you must make one great decision today, let this be THE ONE. Book your V-Malaysia 2018 tickets here!');

    $('#room-reservation-title').html('Complete Your V-Malaysia 2018 Journey');
    $('#room-reservation-par').html('Looking for hotel reservations and transportation transfers in Penang, Malaysia from 24 to 28 April for you and your team? Apollo got you covered!');

    $('#news-and-updates-title').html('NEWS & UPDATES');
    $('#nu-news').html('NEWS');
    $('#nu-read').html('Read');
    $('#nu-videos').html('VIDEOS');
    $('#nu-watch').html('Watch');
    $('#nu-gallery').html('GALLERY');
    $('#nu-view').html('View');

    $('#ig-dock-title').html('The #VCON18 Magic Taking Over The World');

    $('#faqs-title').html('Frequently Asked Questions');
    document.getElementById('faq-tab-one').innerHTML = "How do I purchase a ticket?";
    document.getElementById('faq-tab-one-par').innerHTML = "Click to buy your V-Malaysia 2018 ticket.";
    document.getElementById('faq-tab-two').innerHTML = "What are the available payment terms?";
    document.getElementById('faq-tab-two-par').innerHTML = "Currently, you can pay with cash or credit card (Visa and MasterCard).";
    document.getElementById('faq-tab-three').innerHTML = "What to bring?";
    document.getElementById('faq-tab-three-par').innerHTML = "Going to V-Con? Here are 5 important things you need to bring:";
    document.getElementById('faq-tab-three-par-sub-one').innerHTML = "During registration, bring one (1) valid ID and copy of the confirmation letter that will be sent to you via email right after the purchase of your ticket.";
    document.getElementById('faq-tab-three-par-sub-two').innerHTML = "Enough pocket money to last for 5 days, which you may spend on food, drinks, transportation, V-Con merchandise, souvenirs, etc. Make sure to have your money either in USD or MYR. ";
    document.getElementById('faq-tab-three-par-sub-three').innerHTML = "Clothes good for 5 days. Make sure to bring extra shirts or towels as it is extra warm in Penang, Malaysia around this time.";
    document.getElementById('faq-tab-three-par-sub-four').innerHTML = "Take a camera with you to make your precious V-Con memories last, and have something you can show to your family and future prospects when you go back home.";
    document.getElementById('faq-tab-three-par-sub-five').innerHTML = "As you want to savour every valuable session on stage, make sure to bring your own pen and notebook for some serious note-taking!";
    document.getElementById('faq-tab-four').innerHTML = "Will there be tickets for sale on the day of the event itself?";
    document.getElementById('faq-tab-four-par').innerHTML = "Yes. Only transactions made thru cash and credit card will be accommodated.";
    document.getElementById('faq-tab-five').innerHTML = "Will there be single-day event tickets available?";
    document.getElementById('faq-tab-five-par').innerHTML = "No. The 5-day program we prepared for you is something that should be attended from Day 1 to 5 for a complete life-changing experience. It is a comprehensive, holistic event with an action-packed line-up of activities that are highly essential for your business.";

    $('#contact-us-title').html('Contact us');
    $('#contact-us-par-one').html('If you are having trouble accessing our website, or you have further questions which are not available in our FAQ page, please get in touch with us through our following email addresses.'+
    '<br/><br/>'+
    '<b>Technical Support</b>: vbox@the-v.net <br/>'+
    '<b>Content and Translation Concerns</b>: vcomm@the-v.net');
    $('#contact-us-par-two').html('<b>For inquiries:</b>'+
    '<br/>'+
    'Mr. Vijiyar Thevan <br/>'+
    'vijiyar.thevan@the-v.net <br/>'+
    '+601 2209 3793 <br/><br/>'+
    'Ms. Kauri Subramaniam <br/>'+
    'kauri.s@the-v.net <br/>'+
    '+603 7965 8299');

    $('#follow-us-title').html('Follow Us!');
    $('#follow-us-par').html('Like. Tag. Share.');
}

function toArabic(){
    document.getElementById('tagline').innerHTML = "لا تبحث أكثر من ذلك.استمر في التقدم، وغيّر حياتك إلى الأبد.";
    $('button.buy-tickets').html("اشتر تذكرة");
    $('.see-more').html('<a href="https://www.instagram.com/explore/tags/vcon18/" target="_blank">شاهد المزيد...</a>');

    $('#ct-days').html('أيام');
    $('#ct-hours').html('ساعات');
    $('#ct-mins').html('الدقائق');
    $('#ct-secs').html('ثواني');

    /* WHO, WHAT, WHY*/
    document.getElementById('about-title').innerHTML = "من، ماذا، لماذا";
    document.getElementById('about-what').innerHTML = "ما هو الـ V-Con؟";
    document.getElementById('about-what-p').innerHTML = "الـ V-Con هو تجربة تتساوى مع كلمات من أمثال لا يصدق، ساحر، ومغيّر للحياة. منذ تدشينه في العام 2001 انعقد في تسعة دول مختلفة، إن الـ V- Convention هو تجمع سنوي هائل يستضيفه The V حيث يمكنك أن تتوقع سلسلة من الأحاديث التحفيزية من الطراز العالمي وجلسات التدريب التي تعتبر أساسية للمسوقين الشبكيين المحترفين. أيضاً يتم إعداد أحدث المعارض لأولئك الراغبين في الحصول على معروضات حصرية، ومعرفة المزيد عن المنتجات والاستفادة من العروض الترويجية الخاصة.";
    document.getElementById('about-who').innerHTML = "من يذهب إلى الـ V-Con؟";
    document.getElementById('about-who-p').innerHTML = "إنه مفتوح لكل وكلاء QNET المستقلين الذين يرغبون في اكتساب فهم أفضل حول رحلتهم في التسويق الشبكي. حتى تاريخ اليوم، جمع الـ  V-Conالآلاف من المشاركين من مختلف أجزاء العالم، محطمً أرقاماً قياسية من الأساس.";
    document.getElementById('about-why').innerHTML = "لماذا أنت بحاجة إلى التواجد في الـ V-Con؟";
    document.getElementById('about-why-p').innerHTML = "بصفته شريكاً سيصحبك خلال رحلتك في التسويق الشبكي، يهدف The V إلى تحقيق أقصى استفادة من هذا المؤتمر الذي يمتد خمسة أيام لمساعدتك على المطالبة بهدفك النهائي المتمثل في تحقيق الحرية المالية. فسواء كنت قد انضممت للتو أو ظللت في العمل لعدة أعوام، لن تتخذ قراراً أفضل من العودة للديار إلى الـ V-Con وإدراك إمكانياتك للعظمة التي بلا حدود داخلك.";


    /* HISTORY */
    document.getElementById('history-title').innerHTML = "الـ V-CON عبر التاريخ";
    document.getElementById('history-tagline').innerHTML = "قبل الـ V-Con رقم 26 في إبريل المقبل في الفترة من 24 إلى 28، ،2018 في ساحة SPICE في بينانج، بماليزيا، إليكم مراحل تغييرنا لحياة الناس منذ العام 2001.";


    document.getElementById('vcon-2001-title').innerHTML = "V-Con Bali 2001 :عام 2001";
    document.getElementById('vcon-2001-par').innerHTML = "V-شاهدنا مولد أكبر حدث في The V وأكثرها انتظاراً: وهو الـ Convention أو الـ V-Con. بدءاً بأقل من مائة مشارك في أول حدث في بالي، بإندونيسيا، اليوم يحضر الـ V-Cons أكثر من خمسة عشر ألف مشارك ممثلين لأكثر من 80 دولة من حول العالم.";
    document.getElementById('vcon-2002-title').innerHTML = "V-Con Goa 2002 :2002 عام";
    document.getElementById('vcon-2002-par').innerHTML = "بمشاركة 500 شخص من مختلف أجزاء العالم، قدم V-Con عام 2002 بالهند شعار 'The Essence of Leadership' (جوهر القيادة). مع الاهتمام الذي أثاره، انعقد V-Con Goa، مرتين ليستضيف كل المشاركين الذين أرادوا أن يكونوا جزءا من تجربة مذهلة كهذه.";
    document.getElementById('vcon-2003-title').innerHTML = "V-Con Kota Kinabalu 2003 :2003 عام";
    document.getElementById('vcon-2003-par').innerHTML = "في عام 2003، اتجه الـ V-Con إلى مدينة كوتا كانيبالو، في ولاية صباح، بماليزيا، حيث جمع أكثر من 500 مشارك من 26 دولة مختلفة. وقد حمل شعار 'The Essence of Success' (جوهر النجاح).";
    document.getElementById('vcon-2004-title').innerHTML = "V-Dubai 2004 وEuro V-Con 2004 :2004 عام";
    document.getElementById('vcon-2004-par').innerHTML = "شهد V-Dubai في 2004 الذكرى السادسة لتأسيس الشركة، حيث حضر أكثر من 700 مشارك.في نفس العام عقد The V أول V-Con له في أوربا في فندق Rodos Palace في جزيرة رودس في اليونان. في الفترة من 6 إلى 9 يونيو، 2004، تجمع 200 مشارك لافتتاح شبكة جديدة في أوربا.";
    document.getElementById('vcon-2005-title').innerHTML = "V-Thailand 2005 :2005 عام";
    document.getElementById('vcon-2005-par').innerHTML = "V-Thailand 2005 قدم نشطة أبرزت شغفنا بتطوير قيادة عالمية الطراز بامتياز. ولما كان The V يؤمن بالبدء معهم وهم صغار، تم تدشين فعالية خاصة للاهتمام بأطفال قادتنا في V-Thailand. الفعالية التي تعرف الآن بـ V-Kids بدأت الفعالية بمجموعة صغيرة من الأطفال يتم الاعتناء بها من قبل زوجات V Partners وV Ambassadors الآخرين.";
    document.getElementById('vcon-2006-title').innerHTML = "V-Malaysia 2006 وEuro V-Con Madrid 2006 :2006 عام";
    document.getElementById('vcon-2006-par').innerHTML = "2006 V-Malaysia الذي كان الـ V-Convention السابع،￼￼￼￼ انعقد في مركز مؤتمرات Sunway Pyramid، وقد حمل شعار \"Over The Top\" (فوق القمة).بعد مضي عامين من أول V-Con له في أوربا، دخل The V في العام في برنامج مكثف للتوسع مصمم بصفة خاصة للسوق ا وربية. Euro-VCon Madrid خدم أيضاً كمحطة ل حتفال باثنين من إنجازات الشركة التاريخية: (1) الذكرى الثامنة لتأسيس مجموعة شركات Qi؛ و (2) حصول Qi على لقب رعاية البطولة العالمية ل تحاد الدولي لتنس الريشة - (IBF) والذي مثّل بياناً تأكيدياً لمصداقية الشركة، ومكانتها واستقرارها.";
    document.getElementById('vcon-2007-title').innerHTML = "V-Jakarta 2007 وV-Africa 2007 :2007 عام";
    document.getElementById('vcon-2007-par').innerHTML = "بمشاركة أكثر من 3000 مشارك من 40 دولة مختلفة، انعقد V-Jakarta 2007 في مركز جاكارتا للمؤتمرات، حيث قام The V بتقوية شغفه لنجاح الشبكة.<br/>"+
    "في نفس العام، أحضر The V فعاليته الأكثر مثاراً للحديث إلى كينيا وعقد بنجاح V-Africa 2007 باجتماع أكثر من 2000 مشارك.";
    document.getElementById('vcon-2008-title').innerHTML = "V-Malaysia 2008 وV-Africa 2008 :2008 عام";
    document.getElementById('vcon-2008-par').innerHTML = "احتفلت الشركة بالذكرى السنوية العاشرة لها.<br/>"+
    "كان أحد أبرز الأحداث للـ V-Con الذي انعقد في مركز بينانج الدولي للمؤتمرات Penang International Sports Arena في الفترة من 21 إلى 25 مايو 2018 هو مؤتمر الـ V-Kids حيث تم الاهتمام بأكثر من 124 طفل من مختلف الأعمار والجنسيات خلال ثلاثة أيام من المرح والتعلّم. بجانب مؤتمر الـ V-Kids، الأحداث الاير الأخرى في المؤتمر تضمنت حفلاً استعراضياً وليلة ترحيب ومعرض تم فيه استعراض السلسلة الكاملة من المنتجات والخدمات من The V والشركات الشقيقة.<br/>"+
    "كمبالا، يوغندا، في شرق أفريقيا، أصبحت هي أيضاً حديث المدينة عندما استضافت V-Africa في نفس العام بحضور 1600 مشارك.";
    document.getElementById('vcon-2009-title').innerHTML = "V-Malaysia 2009 :2009 عام";
    document.getElementById('vcon-2009-par').innerHTML = "عقد في شاه علم، بماليزيا، حمل هذا الـ V-Con شعار \"Change Begins\" (التغيير يبدأ).";
    document.getElementById('vcon-2010-title').innerHTML = "V-Malaysia 2010 :2010 عام";
    document.getElementById('vcon-2010-par').innerHTML = "المتحدث التحفيزي الذي ولد بمتلازمة انعدام الأطراف tetra-amelia، نك فوجيسيتش Nick Vujicic، تحدث في V-Malaysia 2010.";
    document.getElementById('vcon-2011-title').innerHTML = "V-Malaysia 2011 :2011 عام";
    document.getElementById('vcon-2011-par').innerHTML = "في عام 2011، أعلن عن الـ V-Con بشعار \"Belief\" (الإيمان).";
    document.getElementById('vcon-2012-title').innerHTML = "V-Indonesia 2012 :2012 عام";
    document.getElementById('vcon-2012-par').innerHTML = "مرة أخرى حط الـ V-Con رحاله في جاكارتا، إندونيسيا، لعقد V-Indonesia 2012، حيث وضع \"Make A Difference\" (اصنع فرق) كشعار دافع له.";
    document.getElementById('vcon-2013-title').innerHTML = "V-Malaysia 2013 :2013 عام";
    document.getElementById('vcon-2013-par').innerHTML = "تجمع الحالمون من كل أجزاء الكرة الأرضية مرة أخرى في ماليزيا في العام 2013 من أجل V-Malaysia 2013 الذي تصدره شعاره \"RYTHM Nation\" (أمة RYTHM)";
    document.getElementById('vcon-2014-title').innerHTML = "V-Malaysia 2014 :2014 عام";
    document.getElementById('vcon-2014-par').innerHTML = "في هذا العام، اتخذ الـ V-Con شعاراً دعا الحالمين إلى \"Arise. Awake. Achieve.\" (أنهض. استيقظ. أنجز.) أيضاً كان أول V-Con قام بفخر بالتعريف بمكانة QNET في كرة القدم العالمية بعد توقيعها على عقد مع فريقManchester City  لكرة القدم كشريك البيع المباشر الحصري له.";
    document.getElementById('vcon-2015-title').innerHTML = "V-Malaysia 2015 وV-UAE 2015 :2015 عام";
    document.getElementById('vcon-2015-par').innerHTML = "باعتباره عاماً انتقالياً بالنسبة للشبكة وللشركة، اتخذ V-Con 2015، \"Game Changer\" (مغيّر مجرى اللعب) كشعار له. كان أيضاً مقدمة للمخطط المستمر لـ The V بعقد اثنين من الـ V-Conventions كل عام يعقد الأول في بينانج، بماليزيا، والثاني في دبي، بالإمارات العربية المتحدة.<br/>"+
    "خلال أحد أبرز الـ V-Cons والذي انعقد في دبي، تم الترحيب ببطلة النساء في التنس، مارتينا هينجيز كأحدث سفيرة لعلامتنا التجارية.";
    document.getElementById('vcon-2016-title').innerHTML = "V-Malaysia 2016 وV-UAE 2016 :2016 عام";
    document.getElementById('vcon-2016-par').innerHTML = "عدد الحضور حطم الأرقام القياسية في V-Malaysia في بينانج. امتلأت الساحة حتى الأطراف بما يفوق خمسة عشر ألف من المشاركين، صداهم يتردد بشعار \"Evolve. Empower. Enrich.\" (تطوير. تعزيّز. إثراء.)<br/>"+
    "صعد على منصة V-UAE كل من أنيل كابور، الممثل والمنتج الهندي الذي ظهر في مرات لا تحصى في أفلام بوليوود وأفلام عالمية؛ جاكي شروف الذي ظل في السينما الهندية لما يقارب أربعة عقود وظهر في 207 فيلم بتسعة لغات؛ وفيفيك أوبيروي الذي صنع أول ظهور له في الأفلام الهندية على منصة V-UAE 2016 لمشاركة كيف قاموا بالقفزة الكبرى كي يصلوا إلى ما وصلوا إليه اليوم.";
    document.getElementById('vcon-2017-title').innerHTML = "V-Malaysia 2017 وV-UAE 2017 :2017 عام";
    document.getElementById('vcon-2017-par').innerHTML = "للعام الثالث على التوالي، انعقد V-Con في كل من بينانج، ماليزيا، ودبي، الإمارات العربية المتحدة، بحضور محطم للأرقام القياسية في كلاهما. تصدر شعار مثير \"DO IT NOW\" (افعلها الآن) كلا الـ V-Conventions. منيبة مزاري، امرأة ملهمة اجتذبت قصة حياتها الكثير من الحب والإعجاب من آلاف الحالمين في V-Malaysia و V-UAE، بالإضافة إلى قائمة متنامية من كبار النجوم الذين انضموا إلى عائلتنا ليكونوا جزءاً من تجربة لا تصدق في الـ V-Con.";



    /* Call-to-Action */
    document.getElementById('cta-title').innerHTML = "جميعنا واحد";
    document.getElementById('cta-par').innerHTML = "تعرّف على العائلة، ادخل إلى دارنا. أتبع النداء.";


    /* ROOM RESERVATION */

    document.getElementById('room-reservation-title').innerHTML = "أكمل رحلتك في V-MALAYSIA 2018";
    document.getElementById('room-reservation-par').innerHTML = "تبحث عن حجز فندق وترحيلات نقل في بينانج، ماليزيا في الفترة من 24 إلى 28 أبريل لك ولفريقك؟ أبولو تغطي احتياجك!";
    document.getElementById('btn-apollo').innerHTML = "ابحث في أبولو الآن";


    /* NEWS AND UPDATES */
    document.getElementById('news-and-updates-title').innerHTML = "أخبار ومستجدات";
    //document.getElementById('news-and-updates-par').innerHTML = "اقرأ | شاهد | اطلع";
    $('#nu-news').html('أخبار');
    $('#nu-read').html('اقرأ');
    $('#nu-videos').html('فيديو');
    $('#nu-watch').html('راقب');
    $('#nu-gallery').html('صالة عرض');
    $('#nu-view').html('رأي');

    /* INSTAGRAM POSTS */
    document.getElementById('ig-dock-title').innerHTML = "سحر #VCON18 يستولي على العالم";

    /* FAQ */
    document.getElementById('faqs-title').innerHTML = "أسئلة متكررة";
    document.getElementById('faq-tab-one').innerHTML = "كيف أشتري تذكرة؟";
    document.getElementById('faq-tab-one-par').innerHTML = '<a href="http://the-v.net/vshoppe/product?title=v-malaysia-2018-ticket" target="_blank">'+"انقر هنا لشراء تذكرتك لـ </a>V-Malaysia 2018";
    document.getElementById('faq-tab-two').innerHTML = "ما هي طرق الدفع المتاحة؟";
    document.getElementById('faq-tab-two-par').innerHTML = "حالياً يمكنك الدفع نقداً أو ببطاقة ائتمان (فيزا وماستركارد).";
    document.getElementById('faq-tab-three').innerHTML = "ماذا أحضر معي؟";
    document.getElementById('faq-tab-three-par').innerHTML = "ذاهب إلى V-Con؟ فيما يلي 5 أشياء مهمة تحتاج لأن تحضرها معك:";
    document.getElementById('faq-tab-three-par-sub-one').innerHTML = "خلال التسجيل، أحضر معك بطاقة هوية واحدة سارية ونسخة من خطاب التأكيد الذي سوف يتم إرساله إليك عبر البريد الإلكتروني بعد شراء تذكرتك.";
    document.getElementById('faq-tab-three-par-sub-two').innerHTML = "قدر من المال في جيبك يكفي لـ 5 أيام، والذي قد تنفق منه على الطعام، المشروبات، النقل، معروضات الـ V-Con، تذكاريات، إلخ.";
    document.getElementById('faq-tab-three-par-sub-three').innerHTML = "قدر من المال في جيبك يكفي لـ 5 أيام، والذي قد تنفق منه على الطعام، المشروبات، النقل، معروضات الـ V-Con، تذكاريات، إلخ. تأكد من أن يكون مالك إما بالدولار الأمريكي أو بالرينجيت الماليزي.";
    document.getElementById('faq-tab-three-par-sub-four').innerHTML = "ملابس ملائمة تكفي لـ 5 أيام. تأكد من إحضار قمصان إضافية أو مناشف حيث أن الجو أكثر حرارة في بينانج، بماليزيا خلال هذه الفترة.";
    document.getElementById('faq-tab-three-par-sub-five').innerHTML = "خذ معك كاميرا لتجعل ذكريات الـ V-Con الغالية تدوم، ويكون لديك شيء يمكنك أن تريه لعائلتك ومرشحي المستقبل عندما تعود إلى وطنك.";
    document.getElementById('faq-tab-four').innerHTML = "هل ستكون هناك تذاكر للبيع في يوم الحدث نفسه؟";
    document.getElementById('faq-tab-four-par').innerHTML = "نعم، سيتم فقط قبول الشراء عن طريق النقد والبطاقات الائتمانية.";
    document.getElementById('faq-tab-five').innerHTML = "هل سيكون هناك تذاكر متاحة لفعالية يوم واحد؟";
    document.getElementById('faq-tab-five-par').innerHTML = "لا. إن برنامج الأيام الخمسة الذي أعددناه لكم هو شيء يجب حضوره منذ اليوم الأول إلى اليوم الخامس من أجل تجربة تغيير كامل للحياة. إنه حدث شامل، متكامل، مع حزمة متراصفة من الأنشطة العملية التي تعتبر أساسية لعملك.";


    /* CONTACT US */
    document.getElementById('contact-us-title').innerHTML = "اتصل بنا";
    document.getElementById('contact-us-par-one').innerHTML = "إن كنت تواجه مشكلة في الدخول على صفحتنا الإلكترونية، أو لديك مزيد من الأسئلة غير المتاحة في صفحتنا للأسئلة المتكررة، نرجو أن تتواصل معنا عبر عنوان البريد الإلكتروني التالي:<br/><br/><b>الدعم الفني</b>: vbox@the-v.net <br/><b>ما يتعلق بالمحتوى والترجمة</b>: vcomm@the-v.net";
    document.getElementById('contact-us-par-two').innerHTML = "<b>للاستفسارات:</b><br/>Mr. Vijiyar Thevan <br/>vijiyar.thevan@the-v.net <br/>+601 2209 3793 <br/><br/>Ms. Kauri Subramaniam <br/>kauri.s@the-v.net <br/>+603 7965 8299";

    /* FOLLOW US */
    document.getElementById('follow-us-title').innerHTML = "تابعونا!";
    document.getElementById('follow-us-par').innerHTML = "إعجاب. أوسم. شارك.";
}

function toTurkish(){

    $('#ct-days').html('Günler');
    $('#ct-hours').html('Saatler');
    $('#ct-mins').html('Dakika');
    $('#ct-secs').html('Saniye');

    $('.see-more').html('<a href="https://www.instagram.com/explore/tags/vcon18/" target="_blank">Daha fazla gör...</a>');

    document.getElementById('tagline').innerHTML = "BAŞKA YERDE ARAMA. DEVAM EDİN VE HAYATINIZI SONSUZA DEK DEĞİŞTİRİN.";
    $('button.buy-tickets').html('BİLET ALIN');

    /* HISTORY **/
    document.getElementById('history-title').innerHTML = "TARİH BOYUNCA V-CON";
    document.getElementById('history-tagline').innerHTML = "24 - 28 Nisan 2018 tarihleri arasında Malezya'nın Penang kentindeki SPICE Arena'da gerçekleşecek olan 26. V-Con'dan önce, 2001 yılından bu yana hayatlarımızı değiştirdiğimiz yer burası";
    document.getElementById('vcon-2001-title').innerHTML = "2001: V-Con Bali 2001";
    document.getElementById('vcon-2001-par').innerHTML = "The V'nin en büyük ve en çok beklenen etkinliğinin doğumunu gördük: V-Convention veya V-Con. Endonezya, Bali'deki ilk etkinlikte katılımcı sayısı 100'den azken, günümüzün V-Con’ları, dünyanın 80 ülkesini temsil eden on beş milyondan fazla katılımcının katılımıyla gerçekleşti.";
    document.getElementById('vcon-2002-title').innerHTML = "2002: V-Con Goa 2002";
    document.getElementById('vcon-2002-par').innerHTML = "Dünyanın farklı yerlerinden 500 katılımcı ile 2002 V-Con Hindistan'da 'The Essence of Leadership' (Liderliğin Özü) teması sergilendi. Gösterilen ilgi ile V-Con Goa, inanılmaz bir deneyimde yer almak isteyen tüm katılımcıları ağırlamak için iki kez düzenlendi.";
    document.getElementById('vcon-2003-title').innerHTML = "2003: V-Con Kota Kinabalu 2003";
    document.getElementById('vcon-2003-par').innerHTML = "2003 yılında V-Con, 26 farklı ülkeden 500'den fazla katılımcının katıldığı Kota Kinabalu, Sabah, Malaysia’ya doğru yola çıktı. 'The Essence of Success' (Başarının Özü) temasıyla paralelleşti.";
    document.getElementById('vcon-2004-title').innerHTML = "2004: V-Dubai 2004 ve Euro V-Con 2004";
    document.getElementById('vcon-2004-par').innerHTML = "2004'te V-Dubai, 700'den fazla katılımcının katıldığı şirketin 6. yıldönümünü kutladı. Aynı yıl, The V, Avrupa'da Yunanistan’ın Rodos adasındaki Rodos Palace Hotel’de ilk V-Con'u gerçekleştirdi. 6-9 Haziran 2004 tarihleri arasında Avrupa'da yeni bir network kurmak için 200 katılımcı toplandı.";
    document.getElementById('vcon-2005-title').innerHTML = "2005: V-Thailand 2005";
    document.getElementById('vcon-2005-par').innerHTML = "V-Thailand 2005, birinci sınıf liderlik ve mükemmeliyet geliştirme konusundaki tutkumuzu vurgulayan etkinlikler içeriyordu. The V, onlara genç yaşlarda başlamaya inandığı için liderlerimizin küçük çocuklarına özel bir etkinlik V-Thailand'da başladı. Şimdi V-Kids olarak bilinen etkinlik, V Partner’lerimizin eşleri ve diğer V Ambassador’larımız tarafından yürütülen küçük bir grup çocukla başladı.";
    document.getElementById('vcon-2006-title').innerHTML = "2006: V-Malaysia 2006 ve Euro V-Con Madrid 2006";
    document.getElementById('vcon-2006-par').innerHTML = "7. V-Convention olarak işaretlenen V-Malaysia 2006, Sunway Pyramid Convention Center’da gerçekleştirildi ve 'Over The Top' (Zirvenin Üzerinde) adlı temayı gerçekleştirdi. İlk Avrupa V-Con'undan iki yıl sonra The V, aynı yıl Avrupa pazarı için özel olarak hazırlanmış yoğun bir genişleme programına başladı. Euro-VCon Madrid aynı zamanda şirket tarihindeki iki kilometre taşını da kutladı: (1) Qi Şirketler Grubu'nun kuruluşunun 8. yıldönümü; ve (2) Qi'nin 2006 Uluslararası Badminton Federasyonu (IBF) Dünya Şampiyonalarına sponsorluğu - ki bu şirketin güvenilirliğini, prestijini ve istikrarını sağlam bir ifadeyle ortaya koymuştur.";
    document.getElementById('vcon-2007-title').innerHTML = "2007: V-Jakarta 2007 ve V-Africa 2007";
    document.getElementById('vcon-2007-par').innerHTML = "40 farklı ülkeden 3000'in üzerinde katılımcı ile V-Jakarta 2007, Jakarta Kongre Merkezi'nde yapıldı; burada The V, networkün başarısı konusundaki tutkusunu güçlendirdi. Aynı yıl, The V, çok konuşulan etkinliğini Kenya'ya taşıdı ve 2.000'den fazla katılımcıyı bir araya getiren V-Africa 2007'yı başarıyla gerçekleştirdi.";
    document.getElementById('vcon-2008-title').innerHTML = "2008: V-Malaysia 2008 ve V-Africa 2008";
    document.getElementById('vcon-2008-par').innerHTML = "Şirket, kuruluşunun 10. yıldönümünü kutladı. V-Con 21-25 Mayıs 2008 tarihlerinde Penang International Sports Arena’da gerçekleştirilen önemli etkinliklerinden biri, farklı yaş ve milletten 124'den fazla çocuğa üç günlük eğlencenin ve öğrenmenin yapıldığı V-Kids Convention oldu. V-Kids Convention’ın yanı sıra, etkinliğin diğer önemli olayları arasında muhteşem Gala ve Karşılama Gecesi ve The V ve kardeş şirketlerinden ürün ve hizmetlerin tümünü sunan bir sergi yer alıyordu. Doğu Afrika Uganda’da olan Kampala, aynı yıl V-Africa’nın yapıldığı ve 1.600 katılımcının katıldığı çok konuşulan bir etkinlik oldu.";
    document.getElementById('vcon-2009-title').innerHTML = "2009: V-Malaysia 2009";
    document.getElementById('vcon-2009-par').innerHTML = "Malezya Shah Alam'da düzenlenen bu V-Con, 'Change Begins' (Değişim Başlıyor) temasını taşıdı.";
    document.getElementById('vcon-2010-title').innerHTML = "2010: V-Malaysia 2010";
    document.getElementById('vcon-2010-par').innerHTML = "Tetra-amelia sendromuyla doğan motivasyonel konuşmacı Nick Vujicic, V-Malaysia 2010’da konuşmasını gerçekleşti.";
    document.getElementById('vcon-2011-title').innerHTML = "2011: V-Malaysia 2011";
    document.getElementById('vcon-2011-par').innerHTML = "2011'de V-Con, 'Belief' ( İnanç) temasını müjdeledi.";
    document.getElementById('vcon-2012-title').innerHTML = "2012: V-Indonesia 2012";
    document.getElementById('vcon-2012-par').innerHTML = "V-Con, V-Indonesia 2012 için Jakarta, Endonezya'da bir kez daha bir evini buldu ve ilgi çekici bir tema olarak 'Make A Difference' (Fark Yarat) belirlemişti.";
    document.getElementById('vcon-2013-title').innerHTML = "2013: V-Malaysia 2013";
    document.getElementById('vcon-2013-par').innerHTML = "Dünyanın dört bir yanından hayalperestler, 2013 yılında Malezya'da 'RYTHM Nation' (RHYTM Millet) olarak adlandırılan V-Malaysia 2013 için tekrar bir araya geldi.";
    document.getElementById('vcon-2014-title').innerHTML = "2014: V-Malaysia 2014";
    document.getElementById('vcon-2014-par').innerHTML = "Bu sene V-Con, hayalperestlere 'Arise. Awake. Achieve' temasıyla seslendi. Ayrıca, Manchester City Futbol Kulübü'nü doğrudan satış ortağı olarak kaydettikten sonra QNET'in futbol dünyasındaki yerini gururla tanıtan ilk V-Con oldu.";
    document.getElementById('vcon-2015-title').innerHTML = "2015: V-Malaysia 2015 ve V-UAE 2015";
    document.getElementById('vcon-2015-par').innerHTML = "Network ve şirket için önemli bir yıl olan 2015 V-Con, 'Game Changer' (Oyun Değiştirici) temasını aldı. Aynı zamanda The V'nin her yıl iki V-Convention’ını düzenledi ve bu; Malezya'nın Penang kentinde ve ikincisi Dubai, Birleşik Arap Emirlikleri'nde gerçekleşen The V'nin devamı niteliğindeydi. Dünya Bayanlar Tenis Şampiyonu Martina Hingis, Dubai'de düzenlenen en unutulmaz V-Con'lardan birinde en yeni marka elçimiz olarak karşılandı.";
    document.getElementById('vcon-2016-title').innerHTML = "2016: V-Malaysia 2016 ve V-UAE 2016";
    document.getElementById('vcon-2016-par').innerHTML = "Penang'da V-Malaysia’ya rekor kıran delegeler katıldı. Arenada, “Evolve. Empower. Enrich.” (Değişin, Güçlendirin, Zenginleşin.) temasını yansıtan on beş bin katılımcı ile doldu taştı. Anil Kapoor, sayısız Bollywood ve uluslararası filmlerde yer alan Hintli bir aktör ve yapımcı olarak; yaklaşık 40 yıl boyunca Hint sinemasında olan ve dokuz dilde 207 filmde yer alan Jackie Shroff; ve Hint filminin ilk çıkışını yapan Vivek Oberoi, 2016'da V-UAE sahnesine çıktı ve bugünkü yerini nasıl almış olduklarını paylaştılar.";
    document.getElementById('vcon-2017-title').innerHTML = "2017: V-Malaysia 2017 ve V-UAE 2017";
    document.getElementById('vcon-2017-par').innerHTML = "Üçüncü yılda rekor kıran V-Con hem Penang, Malezya’da hem de UAE'de düzenlendi. Çılgınca bir “DO IT NOW” (ŞİMDİ YAP) teması iki V-Convention’ın da temasını oluşturdu. Hayat hikayesi V-Malaysia ve V-UAE'de binlerce hayalperestten büyük sevgi ve hayranlık uyandıran ilham verici bir kadın olan Muniba Mazari, ailenize inanılmaz bir V-Con tecrübesinin parçası olmak için katılan süper yıldızlar listesine eklendi.";


    /* Call-to-Action */
    document.getElementById('cta-title').innerHTML = "BİZ BİRİZ.";
    document.getElementById('cta-par').innerHTML = "Ailemizi tanıyın. Evimize gelin. Çağrıyı takip edin. Bugün büyük bir karar vermeniz gerekirse, o kararın BU olmasını izin verin. V-Malaysia 2018 biletlerinizi buradan alın!";


    /* ROOM RESERVATION */
    document.getElementById('room-reservation-title').innerHTML = "V-MALAYSIA 2018 YOLCULUĞUNUZU TAMAMLAYIN";
    document.getElementById('room-reservation-par').innerHTML = "Penang, Malezya'da 24 ve 28 Nisan tarihleri arasında sizin için ve ekibiniz için otel rezervasyonları ve ulaşım transferleri mi arıyorsunuz? Apollo sizin için her şeyi hazırladı!";
    document.getElementById('btn-apollo').innerHTML = "ŞİMDİ APOLLO’YU ARAŞTIRIN";

    /* NEWS AND UPDATES */
    document.getElementById('news-and-updates-title').innerHTML = "HABERLER & GÜNCELLEMELER";
    //document.getElementById('news-and-updates-par').innerHTML = "OKUYUN | İZLEYİN | GÖRÜNTÜLEYİN";
    $('#nu-news').html('HABER');
    $('#nu-read').html('Okumak');
    $('#nu-videos').html('VİDEO');
    $('#nu-watch').html('İzlemek');
    $('#nu-gallery').html('GALERİSİ');
    $('#nu-view').html('Görünüm');


    /* INSTAGRAM POSTS */
    document.getElementById('ig-dock-title').innerHTML = "#VCON18 BÜYÜSÜ DÜNYAYI SARIYOR";

    /* CONTACT US */
    document.getElementById('contact-us-title').innerHTML = "BİZİMLE İLETİŞİME GEÇİN";
    document.getElementById('contact-us-par-one').innerHTML = "Web sitemize erişmekte sorun yaşıyorsanız veya SSS sayfamızda bulunmayan başka sorularınız varsa lütfen aşağıdaki e-posta adreslerimiz aracılığıyla bizimle iletişime geçin.<br/><br/><b>Teknik Destek</b>: vbox@the-v.net <br/><b>İçerik ve Çeviri için</b>: vcomm@the-v.net";
    document.getElementById('contact-us-par-two').innerHTML = "<b>Danışmak için:</b><br/>Mr. Vijiyar Thevan <br/>vijiyar.thevan@the-v.net <br/>+601 2209 3793 <br/><br/>Ms. Kauri Subramaniam <br/>kauri.s@the-v.net <br/>+603 7965 8299";

    /* FOLLOW US */
    document.getElementById('follow-us-title').innerHTML = "BİZİ TAKİP EDİN!";
    document.getElementById('follow-us-par').innerHTML = "BEĞEN. ETİKETLE. PAYLAŞ.";

    /* FAQ **/
    document.getElementById('faqs-title').innerHTML = "Sıkça Sorulan Sorular";
    document.getElementById('faq-tab-one').innerHTML = "Nasıl bir bilet alırım?";
    document.getElementById('faq-tab-one-par').innerHTML = "V-Malaysia 2018 <a href=\"http://the-v.net/vshoppe/product?title=v-malaysia-2018-ticket\" target=\"_blank\">biletinizi satın almak için burayı tıklayın.</a>";
    document.getElementById('faq-tab-two').innerHTML = "Kullanılabilir ödeme koşulları nedir?";
    document.getElementById('faq-tab-two-par').innerHTML = "Şu anda nakit veya kredi kartı ile (Visa ve MasterCard) ödeme yapabilirsiniz.";
    document.getElementById('faq-tab-three').innerHTML = "Ne getirmeli?";
    document.getElementById('faq-tab-three-par').innerHTML = "V-Con'a mı gideceksiniz? Aşağıda, getirmeniz gereken 5 önemli şey var:";
    document.getElementById('faq-tab-three-par-sub-one').innerHTML = "Kayıt sırasında, biletinizi aldıktan hemen sonra size e-posta yoluyla gönderilecek onay mektubunun kopyasını ve bir (1) geçerli kimliğinizi getirin.";
    document.getElementById('faq-tab-three-par-sub-two').innerHTML = "Yiyecek, içecek, ulaşım, V-Con eşyaları, hediyelik eşyalar vb. için harcayabileceğiniz 5 gün için yeterli para. USD veya MYR olduğundan emin olun.";
    document.getElementById('faq-tab-three-par-sub-three').innerHTML = "5 gün boyunca yetecek giysiler. Penang, Malezya'da bu zamanlarda ekstra sıcak olduğundan ekstra gömlek veya havlu getirdiğinizden emin olun.";
    document.getElementById('faq-tab-three-par-sub-four').innerHTML = "Değerli V-Con anılarınızı en son haline getirmek için yanınıza bir fotoğraf makinesi alın ve eve döndüğünüzde ailenize ve gelecekteki kayıtlarınıza gösterebileceğiniz bir şeyleriniz olsun.";
    document.getElementById('faq-tab-three-par-sub-five').innerHTML = "Sahnedeki değerli oturumların tadını çıkarırken, ciddi notlar almak için kendi kaleminizi ve defterinizi getirdiğinizden emin olun!";
    document.getElementById('faq-tab-four').innerHTML = "Etkinliğin yapıldığı gün bilet satılacak mı?";
    document.getElementById('faq-tab-four-par').innerHTML = "Evet. Sadece nakit ve kredi kartı ile yapılan işlemler alınacaktır.";
    document.getElementById('faq-tab-five').innerHTML = "Tek günlük etkinlik biletleri var mı?";
    document.getElementById('faq-tab-five-par').innerHTML = "Hayır. Sizin için hazırladığımız 5 günlük program, yaşamı değiştirecek bir deneyim için 1. Gün'den 5. Gün'e kadar devam etmeniz gereken bir şeydir. Bu, işiniz için son derece gerekli olan, aksiyon dolu bir etkinlik grubuyla kapsamlı, bütüncül bir etkinliktir.";

    /* WHO, WHAT, WHY*/
    document.getElementById('about-title').innerHTML = "KİM, NE, NEDEN";
    document.getElementById('about-what').innerHTML = "V-Con <b>NEDİR?</b>";
    document.getElementById('about-what-p').innerHTML = "V-Con, inanılmaz, büyülü ve yaşamı değiştiren kelimelerle birlikte sık sık kullanılan bir deneyimdir. 2001'deki anlayışından bu yana dokuz farklı ülkede düzenlenen V-Convention, The V tarafından barındırılan yıllık kapsamlı bir toplantıdır ve burada profesyonel networkerlar için gerekli olan bir dizi dünya çapında motivasyonel konuşmalar ve eğitim oturumları bekleyebilirsiniz. En yeni sergiler, özel eşyalar almak, ürünler hakkında daha fazla bilgi sahibi olmak ve özel promosyon almak isteyenler için kurulmuştur.";
    document.getElementById('about-who').innerHTML = "V-Con’a <b>KİM</b> gider?";
    document.getElementById('about-who-p').innerHTML = "Network pazarlama yolculuğunu daha iyi anlamak isteyen QNET'in tüm IR'lerine açıktır. Bugüne kadar V-Con, dünyanın çeşitli yerlerinden gelen binlerce katılımcıyı bir araya getirmeyi başardı.";
    document.getElementById('about-why').innerHTML = "<b>NEDEN</b> V-Con’da olmalısınız?";
    document.getElementById('about-why-p').innerHTML = "Network pazarlama yolculuğunuz boyunca sizinle birlikte olacak bir ortak olarak The V, mali özgürlüğü kazanma nihai hedefinizi talep etmenize yardımcı olmak için bu 5 günlük toplantıyı en üst düzeye çıkarmayı amaçlıyor. İster birkaç yıldır bu işin içinde olun ya da yeni kaydolmuş olun, evinize V-Con'a gelip sınırsız mükemmeliyet potansiyelinizi gerçekleştirmekten daha iyi bir karar veremezsiniz.";
}

function toFrench(){

    $('#ct-days').html('Journées');
    $('#ct-hours').html('Heures');
    $('#ct-mins').html('Minutes');
    $('#ct-secs').html('Secondes');

    $('.see-more').html('<a href="https://www.instagram.com/explore/tags/vcon18/" target="_blank">Voir plus...</a>');

    document.getElementById('tagline').innerHTML = "Ne cherchez pas plus loin. Continuez et changez votre vie pour toujours.";
    $('button.buy-tickets').html('ACHETER UN BILLET');
    /* document.getElementById('buy_ticket_btn').innerHTML = "ACHETER UN BILLET";
    document.getElementById('about_headnote').innerHTML = "ABOUT";
    document.getElementById('history_headnote').innerHTML = "HISTORY";
    document.getElementById('weareone_headnote').innerHTML = "NOUS SOMMES UN";
    document.getElementById('news_headnote').innerHTML = "ACTUALITÉS ET MISES À JOUR";
    document.getElementById('faqs_headnote').innerHTML = "FAQs";
    document.getElementById('contact_headnote').innerHTML = "NOUS CONTACTER"; */

    /* HISTORY */
    document.getElementById('history-title').innerHTML = "LE V-CON DANS L'HISTOIRE";
    document.getElementById('history-tagline').innerHTML = "Avant notre 26ème V-Con qui aura lieu du 24 au 28 avril 2018 au SPICE Arena de Penang, en Malaisie, voici où nous changeons des vies depuis 2001";

    document.getElementById('vcon-2001-title').innerHTML = "2001: V-Con Bali 2001";
    document.getElementById('vcon-2001-par').innerHTML = "Nous avons vu la naissance de l'événement le plus important et le plus attendu de The V : le V-Convention, ou V-Con. De moins d'une centaine de participants au premier événement à Bali, en Indonésie, les V-Cons d'aujourd'hui sont suivis par plus de quinze mille participants représentant jusqu'à 80 pays à travers le monde.";
    document.getElementById('vcon-2002-title').innerHTML = "2002: V-Con Goa 2002";
    document.getElementById('vcon-2002-par').innerHTML = "Avec 500 participants de différentes parties du monde, le V-Con 2002 en Inde a présenté le thème 'The Essence of Leadership' (L'Essence du Leadership). Avec l'attention qu'il a attiré, le V-Con Goa s’est tenu deux fois pour accueillir tous les participants qui voulaient participer à une expérience incroyable.";
    document.getElementById('vcon-2003-title').innerHTML = "2003: V-Con Kota Kinabalu 2003";
    document.getElementById('vcon-2003-par').innerHTML = "En 2003, le V-Con s'est rendu à Kota Kinabalu, à Sabah, en Malaisie, où il a rassemblé plus de 500 participants de 26 pays différents. Il a présenté le thème, 'The Essence of Success' (L’essence du succès).";
    document.getElementById('vcon-2004-title').innerHTML = "2004: V-Dubai 2004 et Euro V-Con 2004";
    document.getElementById('vcon-2004-par').innerHTML = "V-Dubai en 2004 a marqué le 6ème anniversaire de l’entreprise, où plus de 700 participants étaient présents. </br></br>La même année, The V a tenu son premier V-Con en Europe à Rodos Palace Hotel sur l'île de Rhodes, en Grèce. Du 6 au 9 juin 2004, 200 participants se sont réunis pour ouvrir un nouveau réseau en Europe.";
    document.getElementById('vcon-2005-title').innerHTML = "2005: V-Thailand 2005";
    document.getElementById('vcon-2005-par').innerHTML = "V-Thailand 2005 a présenté des activités qui ont fait ressortir notre passion pour le développement du leadership et de l’excellence de classe mondiale.</br></br>Depuis que The V a cru au fait de les faire commencer depuis leur jeunesse, un événement spécial pour les enfants de nos jeunes leaders a débuté au V-Thailand. L'événement maintenant connu sous le nom de V-Kids a commencé avec un petit groupe d'enfants pris en charge par les conjoints de nos V Partners et autres V Ambassadors. ";
    document.getElementById('vcon-2006-title').innerHTML = "2006: V-Malaysia 2006 et Euro V-Con Madrid 2006";
    document.getElementById('vcon-2006-par').innerHTML = "Marqué comme le 7ème V-Convention, le V-Malaysia 2006 a eu lieu à Sunway Pyramid Convention Center et portait sur le thème “Over The Top” (Au-dessus).</br>Deux ans après leur premier V-Con européen, The V s'est également lancé dans un programme d'expansion intensif conçu spécialement pour le marché européen la même année. Euro-VCon Madrid a également servi à célébrer deux autres jalons dans l'histoire de l'entreprise: (1) le 8e anniversaire de la création du Qi Group of Companies; et (2) le Qi’s title sponsorship des Championnats du monde 2006 de la Fédération internationale de badminton (IBF) - qui ont servi à affirmer la crédibilité, le prestige et la stabilité de l'entreprise.";
    document.getElementById('vcon-2007-title').innerHTML = "2007: V-Jakarta 2007 et V-Africa 2007";
    document.getElementById('vcon-2007-par').innerHTML = "Avec plus de 3000 participants de 40 pays différents, le V-Jakarta 2007 s'est tenu au Jakarta Convention Center, où The V a renforcé sa passion pour le succès du réseau.</br>La même année, The V a apporté son événement dont on parle tant au Kenya et a organisé avec succès le V-Africa 2007, rassemblant plus de 2000 participants.";
    document.getElementById('vcon-2008-title').innerHTML = "2008: V-Malaysia 2008 et V-Africa 2008";
    document.getElementById('vcon-2008-par').innerHTML = "L'entreprise a célébré son 10e anniversaire. L'un des points forts du V-Con qui s'est déroulé à Penang International Sports Arena du 21 au 25 mai 2008 fut la Convention V-Kids où plus de 124 enfants de différents âges et nationalités ont eu droit à trois jours de plaisir et d'apprentissage. Outre la Convention V-Kids, les autres points forts de la convention comprenaient le gala spectaculaire, la nuit d’accueil et une exposition qui présentait toute la gamme des produits et services de The V et de ses sociétés sœurs.</br>Kampala, Ouganda situé en Afrique de l'Est est également devenu la ville dont tout le monde parlait car le V-Africa s’est tenu là-bas la même année, avec 1600 participants.";
    document.getElementById('vcon-2009-title').innerHTML = "2009: V-Malaysia 2009";
    document.getElementById('vcon-2009-par').innerHTML = "Tenu à Shah Alam, en Malaisie, ce V-Con portait sur le thème 'Change Begins' (Le changement commence).";
    document.getElementById('vcon-2010-title').innerHTML = "2010: V-Malaysia 2010";
    document.getElementById('vcon-2010-par').innerHTML = "Conférencier motivateur né avec le syndrome de tetra-amelia, Nick Vujicic a parlé au V-Malaysia 2010";
    document.getElementById('vcon-2011-title').innerHTML = "2011: V-Malaysia 2011";
    document.getElementById('vcon-2011-par').innerHTML = "En 2011, le V-Con a été annoncé avec le thème, 'Belief' (Croyance).";
    document.getElementById('vcon-2012-title').innerHTML = "2012: V-Indonesia 2012";
    document.getElementById('vcon-2012-par').innerHTML = "Le V-Con a encore une fois trouvé un toit à Jakarta, en Indonésie, au titre de V-Indonesia 2012, où c’était “Make A Difference” (Faire une différence) comme thème convaincant.";
    document.getElementById('vcon-2013-title').innerHTML = "2013: V-Malaysia 2013";
    document.getElementById('vcon-2013-par').innerHTML = "Les Rêveurs de toutes les parties du globe se sont à nouveau réunis en Malaisie en 2013 pour le V-Malaysia 2013, qui avait comme titre “RYTHM Nation” (RYTHM de Nation).";
    document.getElementById('vcon-2014-title').innerHTML = "2014: V-Malaysia 2014";
    document.getElementById('vcon-2014-par').innerHTML = "Cette année, le V-Con a pris un thème qui invitait les rêveurs à “Arise. Awake. Achieve.” (Se lever, Se réveiller, Atteindre.) C'était aussi le tout premier V-Con qui a fièrement présenté la place de QNET dans le monde du football après avoir signé avec Manchester City Football Club comme partenaire exclusif de vente directe.";
    document.getElementById('vcon-2015-title').innerHTML = "2015: V-Malaysia 2015 and V-UAE 2015";
    document.getElementById('vcon-2015-par').innerHTML = "En tant qu’année charnière pour le réseau et l'entreprise, le V-Con 2015 a pris comme thème “Game Changer” (Catalyseur du changement). C'était aussi l'avènement de la série continue de The V en organisant deux V-Conventions chaque année, avec le premier à Penang, Malaisie, et le deuxième à Dubaï, EAU.</br>Au cours de l'un des plus mémorables V-Cons à Dubaï, la championne du monde des dames de tennis, Martina Hingis a été accueillie comme notre nouvelle ambassadrice de la marque.";
    document.getElementById('vcon-2016-title').innerHTML = "2016: V-Malaysia 2016 et V-UAE 2016";
    document.getElementById('vcon-2016-par').innerHTML = "Un nombre record de délégués ont assisté au V-Malaysia à Penang. L'arène était pleine à craquer avec plus de quinze mille participants, faisant écho au thème 'Evolve. Empower. Enrich' (Evoluer, Autonomiser, Enrichir.).</br>Anil Kapoor, acteur et producteur indien qui est apparu dans d'innombrables films de Bollywood et internationaux; Jackie Shroff qui a été dans le cinéma hindi pendant près de quatre décennies et est apparu dans 207 films en neuf langues; et Vivek Oberoi, qui a fait ses débuts dans le cinéma hindi, sont montés sur la scène du V-UAE en 2016 pour partager comment ils ont fait le grand pas pour être là où ils sont aujourd'hui.";
    document.getElementById('vcon-2017-title').innerHTML = "2017: V-Malaysia 2017 et V-UAE 2017";
    document.getElementById('vcon-2017-par').innerHTML = "Pour la troisième année consécutive, le V-Con a eu lieu à Penang, en Malaisie et à Dubaï, aux EAU, avec une participation record. Le thème vibrant “DO IT NOW” (Faites-le maintenant) était le titre des deux V-Conventions. Muniba Mazari, une femme inspirante dont l'histoire de vie a attiré beaucoup d'amour et d'admiration des milliers de rêveurs au V-Malaysia et V-UAE, est ajoutée à une liste croissante de superstars qui ont rejoint notre famille pour faire partie d'une incroyable expérience V-Con.";



    /* Call-to-Action */
    document.getElementById('cta-title').innerHTML = "NOUS SOMMES UN";
    document.getElementById('cta-par').innerHTML = "Apprenez à connaître la famille. Entrez dans notre maison. Suivez l'appel. Si vous devez prendre une grande décision aujourd'hui, que ce soit CELLE-LÀ. Réservez vos billets du V-Malaysia 2018 ici!";


    /* ROOM RESERVATION */

    document.getElementById('room-reservation-title').innerHTML = "COMPLÉTEZ VOTRE VOYAGE V-MALAYSIA 2018 ";
    document.getElementById('room-reservation-par').innerHTML = "Vous recherchez des réservations d'hôtel et des transferts transport à Penang, en Malaisie du 24 au 28 avril pour vous et votre équipe? Apollo a ce qu’il faut!";
    document.getElementById('btn-apollo').innerHTML = "RECHERCHEZ APOLLO MAINTENANT";

    /* NEWS AND UPDATES */
    document.getElementById('news-and-updates-title').innerHTML = "ACTUALITÉS ET MISES À JOUR";
    //document.getElementById('news-and-updates-par').innerHTML = "LIRE | REGARDER | AFFICHER";
    $('#nu-news').html('NOUVELLES');
    $('#nu-read').html('Lis');
    $('#nu-videos').html('VIDÉO');
    $('#nu-watch').html('Regarder');
    $('#nu-gallery').html('GALERIE');
    $('#nu-view').html('Vue');


    /* INSTAGRAM POSTS */
    document.getElementById('ig-dock-title').innerHTML = "LA MAGIE DU #VCON18 PREND LE CONTRÔLE DU MONDE";


    /* CONTACT US */
    document.getElementById('contact-us-title').innerHTML = "NOUS CONTACTER";
    document.getElementById('contact-us-par-one').innerHTML = "Si vous rencontrez des difficultés à accéder à notre site Web, ou si vous avez d'autres questions qui ne sont pas disponibles sur notre page FAQ, veuillez nous contacter par nos adresses e-mail suivantes.<br/><br/><b>Support technique</b>: vbox@the-v.net <br/><b>Questions liées au contenu et à la traduction</b>: vcomm@the-v.net";
    document.getElementById('contact-us-par-two').innerHTML = "<b>Pour toute demande de renseignements :</b><br/>Mr. Vijiyar Thevan <br/>vijiyar.thevan@the-v.net <br/>+601 2209 3793 <br/><br/>Ms. Kauri Subramaniam <br/>kauri.s@the-v.net <br/>+603 7965 8299";

    /* FOLLOW US */
    document.getElementById('follow-us-title').innerHTML = "NOUS SUIVRE!";
    document.getElementById('follow-us-par').innerHTML = "AIMER. TAG. PARTAGER.";

     /* FAQ */
     document.getElementById('faqs-title').innerHTML = "Questions Fréquemment Posées";
     document.getElementById('faq-tab-one').innerHTML = "Comment puis-je acheter un billet?";
     document.getElementById('faq-tab-one-par').innerHTML = '<a href="http://the-v.net/vshoppe/product?title=v-malaysia-2018-ticket" target="_blank">'+"Cliquez ici pour acheter votre billet</a> V-Malaysia 2018.";
     document.getElementById('faq-tab-two').innerHTML = "Quelles sont les modalités de paiement disponibles?";
     document.getElementById('faq-tab-two-par').innerHTML = "Actuellement, vous pouvez payer en espèces ou par carte de crédit (Visa et MasterCard).";
     document.getElementById('faq-tab-three').innerHTML = "Que faut-il apporter?";
     document.getElementById('faq-tab-three-par').innerHTML = "Vous allez au V-Con? Voici les 5 choses importantes que vous devez apporter:";
     document.getElementById('faq-tab-three-par-sub-one').innerHTML = "Lors de l'inscription, apportez une (1) pièce d'identité valide et une copie de la lettre de confirmation qui vous sera envoyée par courriel juste après l'achat de votre billet.";
     document.getElementById('faq-tab-three-par-sub-two').innerHTML = "Ayez suffisamment d'argent de poche pour 5 jours, que vous pourrez dépenser pour la nourriture, la boisson, le transport, les produits du V-Con, les souvenirs, etc. Assurez-vous d'avoir votre argent en USD ou MYR.";
     document.getElementById('faq-tab-three-par-sub-three').innerHTML = "De bons vêtements pour 5 jours. Assurez-vous d’apporter des chemises ou serviettes supplémentaires car il fait très chaud à Penang, en Malaisie à cette époque.";
     document.getElementById('faq-tab-three-par-sub-four').innerHTML = "Prenez un appareil photo avec vous pour garder longtemps vos précieux souvenirs du V-Con et ayez quelque chose que vous pourrez montrer à votre famille et vos futurs prospects lorsque vous rentrerez chez vous.";
     document.getElementById('faq-tab-three-par-sub-five').innerHTML = "Comme vous voulez savourez chaque session précieuse sur scène, assurez-vous d’apporter votre propre stylo et votre carnet pour une bonne prise de note!";
     document.getElementById('faq-tab-four').innerHTML = "Y aura-t-il des billets à vendre le jour même de l'événement?";
     document.getElementById('faq-tab-four-par').innerHTML = "Oui. Seules les transactions effectuées en espèces et par carte de crédit seront prises en compte.";
     document.getElementById('faq-tab-five').innerHTML = "Y aura-t-il des billets d'une seule journée d'événement disponibles?";
     document.getElementById('faq-tab-five-par').innerHTML = "Non. Le programme de 5 jours que nous avons préparé pour vous est quelque chose auquel il faut assister du 1er au 5e jour pour une expérience complète qui change la vie. Il s'agit d'un événement complet et holistique avec une gamme d’activités riches en action très essentielles pour votre entreprise.";

    /* WHO, WHAT, WHY*/
    document.getElementById('about-title').innerHTML = "QUI, QUOI, POURQUOI";
    document.getElementById('about-what').innerHTML = "C’est QUOI le V-Con?";
    document.getElementById('about-what-p').innerHTML = "Le V-Con est une expérience qui est souvent assimilée à des mots incroyables, magiques et qui changent la vie. Tenu dans neuf pays depuis sa conception en 2001, le V-Convention est un grand rassemblement annuel organisé par The V, où vous pouvez vous attendre à une série de discours de motivation et de séances de formations de classe mondiale essentiels pour les networkers professionnels. Des expositions ultramodernes sont également organisées pour ceux qui souhaitent obtenir des produits exclusifs, apprenez plus sur les produits et profitez des promos spéciales.";
    document.getElementById('about-who').innerHTML = "QUI va au V-Con?";
    document.getElementById('about-who-p').innerHTML = "Il est ouvert à tous les IR de QNET qui souhaitent mieux comprendre leur voyage du marketing de réseau. À ce jour, le V-Con a rassemblé des milliers de participants de différentes parties du monde, avec un nombre record en plus.";
    document.getElementById('about-why').innerHTML = "POURQUOI devez-vous être au V-Con?";
    document.getElementById('about-why-p').innerHTML = "En tant que partenaire qui sera avec vous tout au long de votre voyage du marketing de réseau, The V vise à maximiser cette convention de 5 jours pour vous aider à réclamer votre but ultime d’obtention de la liberté financière. Que vous veniez de vous inscrire ou que vous soyez dans l'entreprise depuis plusieurs années, vous n'avez pas de meilleure décision que de revenir chez vous au V-Con et de réaliser votre grand potentiel sans limites.";
}

function toRussian(){

    $('#ct-days').html('дней');
    $('#ct-hours').html('часов');
    $('#ct-mins').html('минут');
    $('#ct-secs').html('секунд');

    $('.see-more').html('<a href="https://www.instagram.com/explore/tags/vcon18/" target="_blank">Узнать больше...</a>');

    document.getElementById('tagline').innerHTML = "БОЛЬШЕ НЕ ИЩИТЕ. ПРОДОЛЖАЙТЕ ИДТИ И МЕНЯТЬ СВОЮ ЖИЗНЬ НАВСЕГДА.";
    $('button.buy-tickets').html('AКУПИТЬ БИЛЕТ');

    /* HISTORY */
    document.getElementById('history-title').innerHTML = "V-CON В ИСТОРИИ";
    document.getElementById('history-tagline').innerHTML = "В канун нашей 26-й по счету V-Con, которая состоится с 24 по 28 апреля 2018 в SPICE Arena в Penang, Malaysia, рассказываем о том, как мы меняем жизнь людей, начиная с 2001 года.";


    document.getElementById('vcon-2001-title').innerHTML = "2001: V-Con Bali 2001";
    document.getElementById('vcon-2001-par').innerHTML = "Мы увидели зарождение самого большого и самого ожидаемого события The V: V-Convention или V-Con. От менее, чем сто участников на самом первом мероприятии на Бали (Индонезия), количество участников V-Con теперь составляет более пятнадцати тысяч человек, представляющих около 80 стран мира.";
    document.getElementById('vcon-2002-title').innerHTML = "2002: V-Con Goa 2002";
    document.getElementById('vcon-2002-par').innerHTML = "В 2002 году на V-Con в Индии было представлено 500 участников из разных уголков мира, а темой мероприятия стала «The Essence of Leadership» (Суть лидерства). Ввиду большого интереса нетворкеров, V-Con Goa состоялась дважды, чтобы разместить всех участников, которые захотели получить этот удивительный опыт.";
    document.getElementById('vcon-2003-title').innerHTML = "2003: V-Con Kota Kinabalu 2003";
    document.getElementById('vcon-2003-par').innerHTML = "В 2003 году V-Con состоялась в Kota Kinabalu, Sabah, Malaysia, и собрала более 500 участников из 26 стран. Темой мероприятия стала «The Essence of Success» («Сущность успеха»).";
    document.getElementById('vcon-2004-title').innerHTML = "2004: V-Dubai 2004 и Euro V-Con 2004";
    document.getElementById('vcon-2004-par').innerHTML = "V-Dubai в 2004 году ознаменовала 6-ю годовщину компании, и в ней приняли участие более 700 нетворкеров.<br/><br/> В том же году The V провела свою первую V-Con в Европе - в отеле Rodos Palace Hotel на острове Родос, Греция. С 6 по 9 июня 2004 года на мероприятии присутствовали 200 участников с целью открыть новую сеть в Европе.";
    document.getElementById('vcon-2005-title').innerHTML = "2005: V-Thailand 2005";
    document.getElementById('vcon-2005-par').innerHTML = "На V-Thailand 2005 были представлены мероприятия, которые подчеркнули нашу заинтересованность к формированию лидеров мирового уровня.<br/><br/>Поскольку The V верила в то, что нужно начинать смолоду, на V-Thailand стартовало специальное мероприятие, в котором участвовали маленькие дети наших лидеров. Событие, известное теперь как V-Kids, началось с небольшой группы детей, с которыми мы работали супруги наших V Partners и других V Ambassadors.";
    document.getElementById('vcon-2006-title').innerHTML = "2006: V-Malaysia 2006 и Euro V-Con Madrid 2006";
    document.getElementById('vcon-2006-par').innerHTML = "V-Malaysia 2006, ставшая 7-й V-Convention, состоялась в конференц-центре Sunway Pyramid Convention Center и была посвящена теме «Over the Top» (Выше вверх).<br/><br/>Спустя два года после первой V-Con в Европе, The V начала интенсивную программу экспансии, разработанную специально для европейского рынка в том же году. Euro-VCon Madrid также ознаменовала два других этапа в истории компании: (1) 8-я годовщина основания группы компаний Qi; и (2) генеральное спонсорство Чемпионата мира по бадминтону (IBF) 2006 года, что стало значимым заявлением о надежности, престиже и стабильности компании.";
    document.getElementById('vcon-2007-title').innerHTML = "2007: V-Jakarta 2007 и V-Africa 2007";
    document.getElementById('vcon-2007-par').innerHTML = "При участии боле 3000 нетворкеров из 40 разных стран, V-Jakarta 2007 состоялась в Jakarta Convention Center, где The V укрепила свою приверженность к успеху сети.<br/><br/>В том же году The V организовала ставшее широко известным событие в Кении - V-Africa 2007 собрала под своим крылом более 2000 участников";
    document.getElementById('vcon-2008-title').innerHTML = "2008: V-Malaysia 2008 и V-Africa 2008";
    document.getElementById('vcon-2008-par').innerHTML = "Компания отметила свой 10-летний юбилей. Одним из основных моментов V-Con, которая проходила в Penang International Sports Arena с 21 по 25 мая 2008 года, была конвенция V-Kids, где 124 детей разного возраста и национальностей провели три дня, веселясь и познавая новое. Помимо V-Kids Convention, другие основные моменты конвенции включали впечатляющее гала-представление и Welcome Night, а также выставку, где была продемонстрирована вся гамма продуктов и услуг от The V и ее дочерних компаний.<br><br/>Уганда в Восточной Африке, Кампала также стала широко известной в связи с тем, что стала домом для V-Africa в том же году, и в ней приняли участие 1600 нетворкеров.";
    document.getElementById('vcon-2009-title').innerHTML = "2009: V-Malaysia 2009";
    document.getElementById('vcon-2009-par').innerHTML = "Эта V-Con, состоявшаяся в Шах-Аламе (Малайзия) прошла под теглайном “Change Begins” (Change Begins).";
    document.getElementById('vcon-2010-title').innerHTML = "2010: V-Malaysia 2010";
    document.getElementById('vcon-2010-par').innerHTML = "На V-Malaysia 2010 выступил приглашенный мотивационный оратор с синдромом тетраамелии Ник Вуйчич.";
    document.getElementById('vcon-2011-title').innerHTML = "2011: V-Malaysia 2011";
    document.getElementById('vcon-2011-par').innerHTML = "V-Con 2011 года прошла под теглайном “Belief” (Вера).";
    document.getElementById('vcon-2012-title').innerHTML = "2012: V-Indonesia 2012";
    document.getElementById('vcon-2012-par').innerHTML = "V-Con снова вернулась в Джакарту (Индонезия) на V-Indonesia 2012, и основной идеей стала фраза “Make A Difference” (Менять к лучшему).";
    document.getElementById('vcon-2013-title').innerHTML = "2013: V-Malaysia 2013";
    document.getElementById('vcon-2013-par').innerHTML = "Мечтатели со всех частей земного шара снова собрались в Малайзии в 2013 году на V-Malaysia 2013, которая прошла под теглайном “RYTHM Nation” (RHYTM Нация). ";
    document.getElementById('vcon-2014-title').innerHTML = "2014: V-Malaysia 2014";
    document.getElementById('vcon-2014-par').innerHTML = "V-Con этого года бросила клич всем мечтателям - “Arise. Awake. Achieve.” (Встать, Пробудиться, Достигать). Кроме того, эта V-Con стала первой, где было оглашено, что QNET заняла прочное место в мире футбола как следствие подписания контракта с Manchester City Football Club, в результате чего компания стала эксклюзивным партнером по прямым продажам.";
    document.getElementById('vcon-2015-title').innerHTML = "2015: V-Malaysia 2015 и V-UAE 2015";
    document.getElementById('vcon-2015-par').innerHTML = "Этот год стал важным для компании, поэтому в 2015-м теглайном V-Con стала фраза “Game Changer” (Менять правила игры). The V продолжила традицию проведения двух V-Convention в год, таким образом одна из них состоялась в Пинанге (Малайзия), а вторая – в Дубае (ОАЭ).<br><br/>В дни одной из самых памятных V-Con, состоявшихся в Дубае, на сцену вышла чемпионка мирового женского тенниса Мартина Хингис, ставшая новейшим лицом нашей компании.";
    document.getElementById('vcon-2016-title').innerHTML = "2016: V-Malaysia 2016 и V-UAE 2016";
    document.getElementById('vcon-2016-par').innerHTML = "Рекордное число нетворкеров посетило V-Malaysia в Пинанге. Стадион был заполнен до самых стропил, вмещая в себя более пятнадцати тысяч участников, которые в унисон повторяли слоган “Evolve. Empower. Enrich.” (Будь смелей. Развивайся. Богатей).<br><br/>Анил Капур, индийский актер и продюсер, который сыграл во множестве фильмов Болливуда и в международных проектах; Джеки Шрофф, который уже почти четыре десятилетия снимается в фильмах на хинди и появился в 207 фильмах на девяти языках; и Вивек Оберой, который сделал свой дебютный фильм о хинди, вышли на сцену V-UAE в 2016 году, чтобы поделиться тем, как они совершили большой скачок, чтобы быть там, где они есть сегодня.";
    document.getElementById('vcon-2017-title').innerHTML = "2017: V-Malaysia 2017 и V-UAE 2017";
    document.getElementById('vcon-2017-par').innerHTML = "Третий год подряд V-Con состоялась и в Пинанге (Малайзия), и в Дубае (ОАЭ), и число участников на обоих мероприятиях побило все рекорды. Теглайном обоих конвенций стала фраза “DO IT NOW” (Делай это сейчас). На сцену вышла мотивационный оратор Муниба Мазари, и рассказанная история ее жизни вызвала огромное чувство любви и восхищения у тысяч мечтателей на at V-Malaysia и V-UAE, таким образом ее имя было добавлено в созвездие невероятных людей, присоединившихся в нашей семье, что делает опыт участия в V-Con поистине уникальным.";


    /* Call-to-Action */
    document.getElementById('cta-title').innerHTML = "МЫ ЕДИНЫ";
    document.getElementById('cta-par').innerHTML = "Познакомься с семьей. Войди в наш дом. Следуй своему призванию. Если сегодня ты должен принять одно грандиозное решение, то прими ИМЕННО ЭТО решение. Забронируй свой билет на V-Malaysia 2018 здесь!";

    /* ROOM RESERVATION */

    document.getElementById('room-reservation-title').innerHTML = "ЗАВЕРШИ СВОИ ПРИГОТОВЛЕНИЯ К ПОЕЗДКЕ НА V-MALAYSIA 2018";
    document.getElementById('room-reservation-par').innerHTML = "Хочешь забронировать гостиницу и трансферы в Пинанге (Малайзия) в дни с 24 по 28 апреля для себя и своей команды? В этом тебе поможет Apollo! ";
    document.getElementById('btn-apollo').innerHTML = "ПОИСК В APOLLO";

    /* NEWS AND UPDATES */
    document.getElementById('news-and-updates-title').innerHTML = "НОВОСТИ И ОБЪЯВЛЕНИЯ";
    //document.getElementById('news-and-updates-par').innerHTML = "ЧИТАТЬ | СЛЕДИТЬ | СМОТРЕТЬ";
    $('#nu-news').html('НОВОСТИ');
    $('#nu-read').html('Читать');
    $('#nu-videos').html('ВИДЕО');
    $('#nu-watch').html('Смотреть');
    $('#nu-gallery').html('ГАЛЕРЕЯ');
    $('#nu-view').html('Посмотреть');


    /* INSTAGRAM POSTS */
    document.getElementById('ig-dock-title').innerHTML = "МАГИЯ #VCON18 ПОКОРЯЕТ МИР";

    /* CONTACT US */
    document.getElementById('contact-us-title').innerHTML = "КОНТАКТЫ";
    document.getElementById('contact-us-par-one').innerHTML = "При наличии проблем, связанных с доступом на наш вебсайт, а также по другим вопросам, ответ на которые не найден на нашей странице вопросов и ответов, просьба обращаться по адресам электронной почты, указанным ниже.<br/><br/><b>Техническая поддержка</b>: vbox@the-v.net <br/><b>По вопросам, связанным с информационным наполнением и переводом</b>: vcomm@the-v.net";
    document.getElementById('contact-us-par-two').innerHTML = "<b>По остальным вопросам:</b><br/>Mr. Vijiyar Thevan <br/>vijiyar.thevan@the-v.net <br/>+601 2209 3793 <br/><br/>Ms. Kauri Subramaniam <br/>kauri.s@the-v.net <br/>+603 7965 8299";

    /* FOLLOW US */
    document.getElementById('follow-us-title').innerHTML = "СЛЕДУЙ ЗА НАМИ!";
    document.getElementById('follow-us-par').innerHTML = "ПОСТАВИТЬ ЛАЙК. ОТМЕТИТЬ. ПОДЕЛИТЬСЯ.";

    /* FAQ */
    document.getElementById('faqs-title').innerHTML = "Часто задаваемые вопросы";
    document.getElementById('faq-tab-one').innerHTML = "Как купить билет?";
    document.getElementById('faq-tab-one-par').innerHTML = '<a href="http://the-v.net/vshoppe/product?title=v-malaysia-2018-ticket" target="_blank">'+"Жми здесь, чтобы купить билет на</a> V-Malaysia 2018.";
    document.getElementById('faq-tab-two').innerHTML = "Каковы условия платежа?";
    document.getElementById('faq-tab-two-par').innerHTML = "В настоящее время оплата возможно кредитной или дебетовой картой (Visa и MasterCard).";
    document.getElementById('faq-tab-three').innerHTML = "Что взять с собой?";
    document.getElementById('faq-tab-three-par').innerHTML = "Едешь на V-Кон? Список из 5 важных вещей, которые нужно иметь при себе:";
    document.getElementById('faq-tab-three-par-sub-one').innerHTML = "Идя на регистрацию, нужно иметь при себе одно (1) удостоверение личности и копию письма с подтверждением, которое было отправлено на электронную почту после покупки билета. ";
    document.getElementById('faq-tab-three-par-sub-two').innerHTML = "Достаточная сумма денег на 5 дней, предназначенных для покупки еды, напитков, на транспортные расходы, на приобретение товаров V-Кон, сувениров и т.д. Прими к сведению, что наличные деньги должны быть либо в долларах США, либо в малайзийских ринггитах.";
    document.getElementById('faq-tab-three-par-sub-three').innerHTML = "Сменная одежда на 5 дней. Желательно иметь при себе запасную рубашку/футболку или полотенце, так как это жаркое время года в Пинанге (Малайзия).";
    document.getElementById('faq-tab-three-par-sub-four').innerHTML = "Обязательно захвати с собой фотоаппарат, который запечатлеет наиболее памятные моменты V-Кон, которые ты потом покажешь своим близким, а также проспектам по возвращению домой.";
    document.getElementById('faq-tab-three-par-sub-five').innerHTML = "Не забудь захватить с собой ручку и блокнот, чтобы записать наиболее важную и ценную информацию, которую ты услышишь на сцене.";
    document.getElementById('faq-tab-four').innerHTML = "Продолжится ли продажа билетов в день открытия конвенции?";
    document.getElementById('faq-tab-four-par').innerHTML = "Да. Билеты можно будет оплатить наличными или кредитной картой.";
    document.getElementById('faq-tab-five').innerHTML = "Доступен ли к покупке билет всего на один день участия?";
    document.getElementById('faq-tab-five-par').innerHTML = "Нет. Эта 5-дневная программа подготовлена с расчётом на ежедневное посещение каждым из участников, чтобы получить, таким образом, полноценный и судьбоносный опыт. Это цельное и комплексное мероприятие с насыщенной программой станет невероятно полезным для твоего бизнеса.";

    /* WHO, WHAT, WHY*/
    document.getElementById('about-title').innerHTML = "КТО,  ЧТО, ПОЧЕМУ";
    document.getElementById('about-what').innerHTML = "<b>ЧТО</b> такое  V-Con?";
    document.getElementById('about-what-p').innerHTML = "V-Con - это опыт, о котором зачастую отзываются такими словами, как невероятный, волшебный и меняющий жизнь. V-Convention, состоявшаяся в девяти разных странах с момента ее создания в 2001 году, является грандиозной ежегодной встречей нетворкеров, организованной The V, где вас ждут серии мотивационных выступлений и тренингов мирового уровня, которые так необходимы для профессиональных нетворкеров. В месте проведения конвенции также обустраиваются выставки, ориентированные на тех, кто желает приобрести эксклюзивные товары, узнать больше информации о продуктах и воспользоваться специальными промо-акциями.";
    document.getElementById('about-who').innerHTML = "<b>КТО</b> участвует в V-Con?";
    document.getElementById('about-who-p').innerHTML = "Участвовать в мероприятии могут все IR QNET, желающие лучше познать свое путешествие в сетевом маркетинге. На сегодняшний день V-Con собрала тысячи участников из разных уголков мира с рекордным числом участников.";
    document.getElementById('about-why').innerHTML = "<b>ПОЧЕМУ </b> нужно быть на V-Con?";
    document.getElementById('about-why-p').innerHTML = "Будучи партнером, который будет рядом с вами во время вашего пути в сетевом маркетинге, The V стремится сделать ваш опыт участия в пятидневной конвенции максимально полезным, и помочь вам заявить о своей главной цели - обретение финансовой свободы. Если вы только что зарегистрировались или в бизнесе вы уже несколько лет, невозможно принять более актуальное решение, кроме как вернуться на V-Con и реализовать свой безграничный потенциал величия.";
}

function toIndonesian(){

    $('#ct-days').html('Hari');
    $('#ct-hours').html('Jam');
    $('#ct-mins').html('Menit');
    $('#ct-secs').html('Detik');

    $('.see-more').html('<a href="https://www.instagram.com/explore/tags/vcon18/" target="_blank">Lihat lebih lanjut...</a>');

    document.getElementById('tagline').innerHTML = "TIDAK TERLIHAT LAGI. MAJU TERUS, DAN RUBAH HIDUP KAMU UNTUK SELAMANYA.";
    $('button.buy-tickets').html('BELI TIKET');

    /* HISTORY **/
    document.getElementById('history-title').innerHTML = "V-CON MELALUI SEJARAH";
    document.getElementById('history-tagline').innerHTML = "Sebelum V-Con yang ke 26 kita datang tanggal 24-28 April 2018 di SPICE Arena di Penang, Malaysia, di sinilah kita telah mengubah kehidupan sejak tahun 2001";

    document.getElementById('vcon-2001-title').innerHTML = "2001: V-Con Bali 2001";
    document.getElementById('vcon-2001-par').innerHTML = "Kita melihat kelahiran acara The V terbesar dan event yang paling dinanti-nanti: V-Convention, atau V-Con. Dari sekurangnya seratus peserta dalam acara awal di Bali, Indonesia, V-Cons hari ini dihadiri oleh lebih dari lima belas ribu peserta yang mewakili 80 negara di seluruh dunia.";
    document.getElementById('vcon-2002-title').innerHTML = "2002: V-Con Goa 2002";
    document.getElementById('vcon-2002-par').innerHTML = "Dengan 500 peserta dari berbagai belahan dunia, V-Con 2002 di India memamerkan tema 'Inti dari Kepemimpinan' (The Essence of Leadership). Dengan perhatian menariknya, V-Con Goa diadakan dua kali untuk mengakomodasi semua peserta yang ingin mengikuti pengalaman yang luar biasa.";
    document.getElementById('vcon-2003-title').innerHTML = "2003: V-Con Kota Kinabalu 2003";
    document.getElementById('vcon-2003-par').innerHTML = "Pada tahun 2003, V-Con berhasil menuju Kota Kinabalu, Sabah, Malaysia, di mana V-Con ini telah mengumpulkan lebih dari 500 peserta dari 26 negara yang berbeda. Ini diarak dengan tema, 'Inti dari Kesuksesan' (The Essence of Success).";
    document.getElementById('vcon-2004-title').innerHTML = "2004: V-Dubai 2004 dan Euro V-Con 2004";
    document.getElementById('vcon-2004-par').innerHTML = "V-Dubai pada tahun 2004 menandai hari jadi perusahaan yang ke-6, dimana lebih dari 700 peserta hadir. Pada tahun yang sama, The V mengadakan V-Con pertamanya di Eropa di Rodos Palace Hotel di pulau Rhodes, Yunani. Dari tanggal 6 sampai 9 Juni 2004, 200 peserta berkumpul untuk membuka jaringan baru di Eropa.";
    document.getElementById('vcon-2005-title').innerHTML = "2005: V-Thailand 2005";
    document.getElementById('vcon-2005-par').innerHTML = "V-Thailand 2005 menampilkan kegiatan yang menyoroti semangat kita untuk mengembangkan kepemimpinan dan keunggulan kelas dunia. Karena The V percaya memulai mereka sejak muda, sebuah acara khusus yang melayani anak-anak muda pemimpin kami dimulai di V-Thailand. Acara yang sekarang dikenal dengan V-Kids dimulai dengan sekelompok kecil anak-anak yang ditangani oleh pasangan V Partners dan V Ambassadors lainnya.";
    document.getElementById('vcon-2006-title').innerHTML = "2006: V-Malaysia 2006 dan Euro V-Con Madrid 2006";
    document.getElementById('vcon-2006-par').innerHTML = "Ditandai sebagai V-Konvensi ke-7, V-Malaysia 2006 diadakan di Sunway Pyramid Convention Center dan diberi tema 'Melebihi puncak' (Over The Top). Dua tahun setelah V-Con Eropa pertama mereka, The V juga memulai program perluasan intensif yang dirancang khusus untuk pasar Eropa pada tahun yang sama. Euro-VCon Madrid juga bertugas untuk merayakan dua tonggak sejarah lainnya dalam sejarah perusahaan: (1) ulang tahun ke 8 berdirinya Grup Perusahaan Qi; dan (2) pemberian gelar Qi pada Kejuaraan Dunia Bulutangkis Internasional (IBF) tahun 2006 - yang berfungsi sebagai pernyataan tegas kredibilitas, wibawa dan stabilitas perusahaan.";
    document.getElementById('vcon-2007-title').innerHTML = "2007: V-Jakarta 2007 dan V-Africa 2007";
    document.getElementById('vcon-2007-par').innerHTML = "Dengan lebih dari 3.000 peserta dari 40 negara yang berbeda, V-Jakarta 2007 diadakan di Jakarta Convention Center, di mana The V memperkuat gairahnya untuk kesuksesan jaringan. Pada tahun yang sama, The V membawa banyak acara tentang Kenya dan berhasil menyelenggarakan V-Africa 2007, mengumpulkan lebih dari 2.000 peserta.";
    document.getElementById('vcon-2008-title').innerHTML = "2008: V-Malaysia 2008 dan V-Africa 2008";
    document.getElementById('vcon-2008-par').innerHTML = "Perusahaan merayakan hari jadinya yang ke-10. Salah satu yang menarik dari V-Con yang diadakan di Penang International Sports Arena dari tanggal 21 sampai 25 Mei tahun 2008 adalah Konvensi V-Kids dimana lebih dari 124 anak-anak dari berbagai usia dan kebangsaan disuguhi tiga hari kesenangan dan pembelajaran. Selain Konvensi V-Kids, sorotan lain dari konvensi tersebut mencakup Pesta besar and Welcome Night (Selamat Datang Malam) yang spektakuler dan sebuah pameran yang memamerkan keseluruhan produk dan layanan dari The V dan perusahaan sejenisnya. Uganda di Afrika Timur, Kampala juga menjadi pembicaraan tentang kota tersebut karena V-Africa diadakan pada tahun yang sama, dengan 1.600 peserta.";
    document.getElementById('vcon-2009-title').innerHTML = "2009: V-Malaysia 2009";
    document.getElementById('vcon-2009-par').innerHTML = "Diadakan di Shah Alam, Malaysia, V-Con ini mengusung tema 'Change Begins' (Perubahan Dimulai).";
    document.getElementById('vcon-2010-title').innerHTML = "2010: V-Malaysia 2010";
    document.getElementById('vcon-2010-par').innerHTML = "Pembicara motivasi lahir dengan sindrom tetra-amelia, Nick Vujicic berbicara di V-Malaysia 2010";
    document.getElementById('vcon-2011-title').innerHTML = "2011: V-Malaysia 2011";
    document.getElementById('vcon-2011-par').innerHTML = "Pada tahun 2011, V-Con digembar-gemborkan dengan tema, 'Belief' (Percaya).";
    document.getElementById('vcon-2012-title').innerHTML = "2012: V-Indonesia 2012";
    document.getElementById('vcon-2012-par').innerHTML = "V-Con sekali lagi menemukan sebuah rumah di Jakarta, Indonesia untuk V-Indonesia 2012, di mana ia memiliki 'Make A Difference' (Tema Perbedaan) sebagai tema yang menarik.";
    document.getElementById('vcon-2013-title').innerHTML = "2013: V-Malaysia 2013";
    document.getElementById('vcon-2013-par').innerHTML = "Pemimpi dari seluruh penjuru dunia berkumpul kembali di Malaysia pada tahun 2013 untuk V-Malaysia 2013, yang berjudul 'RYTHM Nation' (Rakyat RYTHM).";
    document.getElementById('vcon-2014-title').innerHTML = "2014: V-Malaysia 2014";
    document.getElementById('vcon-2014-par').innerHTML = "Tahun ini, V-Con mengambil tema yang meminta pemimpi untuk ' Arise. Awake. Achieve. ' (Bangkit. Bangun. Mencapai) Ini juga merupakan V-Con pertama yang dengan bangga memperkenalkan tempat QNET di dunia sepak bola setelah menandatangani kontrak dengan Manchester City Football Club sebagai mitra penjualan langsung eksklusifnya.";
    document.getElementById('vcon-2015-title').innerHTML = "2015: V-Malaysia 2015 dan V-UAE 2015";
    document.getElementById('vcon-2015-par').innerHTML = "Sebagai tahun yang sangat penting bagi jaringan dan perusahaan 2015 V-Con mengambil tema 'Game Changer' (Pengganti Permainan) sebagai temanya. Ini juga merupakan kemunculan The V yang terus beruntun dalam menyelenggarakan dua V-Conventions setiap tahun, dengan yang pertama di Penang, Malaysia, dan yang kedua di Dubai, UAE. Selama salah satu V-Cons yang paling berkesan yang diadakan di Dubai, Juara Tenis Putri Dunia, Martina Hingis disambut sebagai duta merek terbaru kita. ";
    document.getElementById('vcon-2016-title').innerHTML = "2016: V-Malaysia 2016 dan V-UAE 2016";
    document.getElementById('vcon-2016-par').innerHTML = "Sejumlah pemecahan rekor dari delegasi yang hadir di V-Malaysia di Penang. Arena itu dipenuhi lebih dari lima belas ribu peserta, menggema tema ' Evolve. Empower. Enrich. '(Berevolusi Memberdayakan. Perkaya.). Anil Kapoor, seorang aktor dan produser di India yang tampil dalam film Bollywood dan internasional yang tak terhitung jumlahnya; Jackie Shroff yang telah berada di bioskop Hindi selama hampir empat dekade dan telah tampil di 207 film dalam sembilan bahasa; dan Vivek Oberoi yang membuat debut film Hindi-nya naik di panggung V-UAE pada tahun 2016 untuk menceritakan bagaimana mereka mengambil lompatan besar untuk berada di tempat mereka hari ini.";
    document.getElementById('vcon-2017-title').innerHTML = "2017: V-Malaysia 2017 dan V-UAE 2017";
    document.getElementById('vcon-2017-par').innerHTML = "Selama 3 tahun berturut-turut, V-Con diadakan di Penang, Malaysia dan Dubai, UAE, dengan keduanya memecahkan rekor kehadiran. Tema 'DO IT NOW' (Lakukan Sekarang) dengan tema pokok dua V-Conventions. Muniba Mazari, seorang wanita inspiratif yang kisah hidupnya menarik banyak cinta dan kekaguman dari ribuan pemimpi di V-Malaysia dan V-UAE, menambah daftar superstar yang berkembang yang bergabung dengan keluarga kita untuk menjadi bagian dari pengalaman V-Con yang luar biasa.";


    /* Call-to-Action */
    document.getElementById('cta-title').innerHTML = "KITA ADALAH SATU";
    document.getElementById('cta-par').innerHTML = "Kenali keluarga ini. Memasuki rumah kita. Ikuti panggilan. Jika Anda harus membuat satu keputusan besar hari ini, biarkan ini menjadi THE ONE. Pesan tiket V-Malaysia 2018 anda di sini!";


    /* ROOM RESERVATION */
    document.getElementById('room-reservation-title').innerHTML = "Lengkapi PERJALANAN V-MALAYSIA 2018 ANDA";
    document.getElementById('room-reservation-par').innerHTML = "Mencari pemesanan hotel dan transportasi di Penang, Malaysia dari tanggal 24 sampai 28 April untuk anda dan tim anda? Apollo membantu anda!";
    document.getElementById('btn-apollo').innerHTML = "CARU APOLLO SEKARANG";

    /* NEWS AND UPDATES */
    document.getElementById('news-and-updates-title').innerHTML = "BERITA & UPDATE";
    //document.getElementById('news-and-updates-par').innerHTML = "MEMBACA | MENONTON | MEMANDANG";
    $('#nu-news').html('BERITA');
    $('#nu-read').html('Baca baca');
    $('#nu-videos').html('VIDEO');
    $('#nu-watch').html('Menonton');
    $('#nu-gallery').html('GALERI');
    $('#nu-view').html('Melihat');


    /* INSTAGRAM POSTS */
    document.getElementById('ig-dock-title').innerHTML = "THE # VCON18 MAGIC MENGAMBIL ALIH DUNIA";

    /* CONTACT US */
    document.getElementById('contact-us-title').innerHTML = "HUBUNGI KAMI";
    document.getElementById('contact-us-par-one').innerHTML = "Jika Anda mengalami masalah dalam mengakses situs kami, atau Anda memiliki pertanyaan lebih lanjut yang tidak tersedia di halaman FAQ kami, silakan hubungi kami melalui alamat email berikut.<br/><br/><b>Dukungan teknis</b>: vbox@the-v.net <br/><b>Konten dan Kepentingan Penerjemahan</b>: vcomm@the-v.net";
    document.getElementById('contact-us-par-two').innerHTML = "<b>Untuk pertanyaan:</b><br/>Mr. Vijiyar Thevan <br/>vijiyar.thevan@the-v.net <br/>+601 2209 3793 <br/><br/>Ms. Kauri Subramaniam <br/>kauri.s@the-v.net <br/>+603 7965 8299";

    /* FOLLOW US */
    document.getElementById('follow-us-title').innerHTML = "IKUTI KAMI!";
    document.getElementById('follow-us-par').innerHTML = "SUKAI. TANDAI. BAGIKAN.";

    /* FAQ **/
    document.getElementById('faqs-title').innerHTML = "Pertanyaan yang Sering Diajukan";

    document.getElementById('faq-tab-one').innerHTML = "Bagaimana cara membeli tiket?";
    document.getElementById('faq-tab-one-par').innerHTML = '<a href="http://the-v.net/vshoppe/product?title=v-malaysia-2018-ticket" target="_blank">'+"Klik disini untuk membeli tiket</a> V-Malaysia 2018 anda.";
    document.getElementById('faq-tab-two').innerHTML = "Apa cara pembayaran yang tersedia?";
    document.getElementById('faq-tab-two-par').innerHTML = "Saat ini, Anda bisa membayar dengan uang tunai atau kartu kredit (Visa dan MasterCard).";
    document.getElementById('faq-tab-three').innerHTML = "Apa yang perlu Dibawa?";
    document.getElementById('faq-tab-three-par').innerHTML = "Pergi ke V-Con? Berikut 5 hal penting yang perlu Anda bawa:";
    document.getElementById('faq-tab-three-par-sub-one').innerHTML = "Saat registrasi, bawalah satu (1) kartu identitas yang masih berlaku dan fotokopi surat konfirmasi yang akan dikirimkan kepada anda melalui email tepat setelah pembelian tiket anda.";
    document.getElementById('faq-tab-three-par-sub-two').innerHTML = "Uang saku yang cukup untuk selama 5 hari, yang bisa Anda pakai untuk makanan, minuman, transportasi, barang barang V-Con, souvenir, dll. Pastikan uang Anda baik dalam mata uang USD atau MYR.";
    document.getElementById('faq-tab-three-par-sub-three').innerHTML = "Pakaian bagus untuk 5 hari. Pastikan membawa kaos ekstra atau handuk karena ekstra hangat di Penang, Malaysia pada saat ini.";
    document.getElementById('faq-tab-three-par-sub-four').innerHTML = "Bawa kamera Anda untuk membuat kenangan V-Con Anda yang berharga, dan bawa sesuatu yang dapat Anda tunjukkan kepada keluarga dan calon prospek Anda saat pulang nanti.";
    document.getElementById('faq-tab-three-par-sub-five').innerHTML = "Karena Anda ingin menikmati setiap sesi berharga di atas panggung, pastikan membawa pena dan buku catatan Anda sendiri untuk beberapa catatan yang serius!";
    document.getElementById('faq-tab-four').innerHTML = "Akankah ada tiket untuk dijual di hari acara itu?";
    document.getElementById('faq-tab-four-par').innerHTML = "Ada. Hanya transaksi yang dilakukan dengan uang tunai dan kartu kredit akan diakomodasi.";
    document.getElementById('faq-tab-five').innerHTML = "Akankah ada tiket acara satu hari yang tersedia?";
    document.getElementById('faq-tab-five-par').innerHTML = "Tidak. Program 5 hari yang kami siapkan untuk Anda adalah sesuatu yang harus dihadiri dari Hari ke 1 sampai 5 untuk pengalaman mengubah hidup yang lengkap. Ini adalah acara yang saling berhubungan yang luas dan dilengkapi dengan paket aktivitas penuh aksi yang sangat penting untuk bisnis Anda.";

    /* WHO, WHAT, WHY*/
    document.getElementById('about-title').innerHTML = "SIAPA, APA, KENAPA";
    document.getElementById('about-what').innerHTML = "<b>Apa</b> itu V-Con?";
    document.getElementById('about-what-p').innerHTML = "V-Con adalah suatu pengalaman yang sering disamakan dengan kata-kata yang luar biasa, magis, dan mengubah hidup. Diadakan di sembilan negara yang berbeda sejak konsepsinya pada tahun 2001, V-Convention adalah sebuah pertemuan tahunan yang diselenggarakan oleh The V, di mana Anda dapat mengharapkan serangkaian pidato dan sesi motivasi kelas dunia yang penting bagi para pelaku jaringan profesional. Pameran mutakhir juga disiapkan bagi mereka yang ingin mendapatkan barang dagangan eksklusif, tahu lebih banyak tentang produk, dan memanfaatkan promo khusus.";
    document.getElementById('about-who').innerHTML = "<b>Siapa</b> yang datang ke V-Con?";
    document.getElementById('about-who-p').innerHTML = "Ini terbuka untuk semua IR dari QNET yang ingin mendapatkan pemahaman yang lebih baik tentang perjalanan pemasaran jaringan mereka. Sampai saat ini, V-Con telah mengumpulkan ribuan peserta dari berbagai belahan dunia, dengan pemecahan rekor untuk jumlah terbesar.";
    document.getElementById('about-why').innerHTML = "<b>Kenapa</b> kita perlu berada di V-Con?";
    document.getElementById('about-why-p').innerHTML = "Sebagai mitra yang akan bersama Anda disepanjang perjalanan pemasaran jaringan Anda, The V bertujuan untuk memaksimalkan konvensi 5 hari ini untuk membantu Anda menegaskan tujuan akhir Anda untuk memperoleh kebebasan finansial. Apakah itu Anda baru saja mendaftar atau telah berkecimpung dalam bisnis ini selama beberapa tahun, Anda tidak memiliki keputusan yang lebih baik selain pulang ke V-Con dan menyadari potensi tak terbatas Anda untuk kejayaan.";
}
