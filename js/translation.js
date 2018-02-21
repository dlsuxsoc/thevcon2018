$(document).ready(function(){
    $("#chosen_lang").change(function(){
        var mode = this.value;

        switch(mode){
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
    });
});

function toEnglish(){
    $('button.buy-tickets').html('BUY TICKETS');
    $('#btn-apollo').html('SEARCH APOLLO NOW');

    $('#main-tagline').html('Look no further. Keep going and change your life forever.');
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

    $('vcon-2008-title').html('V-Malaysia 2008 and V-Africa 2008');
    $('vcon-2008-par').html('The company celebrated its 10th anniversary. One of the highlights of V-Con held at the Penang International Sports Arena from the 21st to 25th of May in 2008 was the V-Kids Convention where over 124 children of different ages and nationalities were treated to three days of fun and learning. Aside from the V-Kids Convention, other highlights of the convention included the spectacular Gala and Welcome Night and an exhibit that showcased the whole gamut of products and services from The V and its sister companies. Uganda in East Africa, Kampala also became the talk of the town as V-Africa was held in the same year, with 1,600 participants.');

    $('vcon-2009-title').html('V-Malaysia 2009');
    $('vcon-2009-par').html('Held in Shah Alam, Malaysia, this V-Con carried the theme "Change Begins."');

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
    $('#faq-tab-one').html('How do I purchase a ticket?');
    $('#faq-tab-one-par').html('Click <a href="#" target="_blank">here</a> to buy your V-Malaysia 2018 ticket.');
    $('#faq-tab-two').html('What are the available payment terms?');
    $('#faq-tab-two-par').html('Currently, you can pay with cash or credit card (Visa and MasterCard).');
    $('#faq-tab-three').html('What to bring?');
    $('#faq-tab-three-par').html('Going to V-Con? Here are 5 important things you need to bring:'+
    '<ol type="1">'+
    '<li id="faq-tab-three-par-sub-one">'+
    'During registration, bring one (1) valid ID and copy of the confirmation letter that will be sent to you via email right after the purchase of your ticket.'+
    '</li>'+
    '<li id="faq-tab-three-par-sub-two">'+
    'Enough pocket money to last for 5 days, which you may spend on food, drinks, transportation, V-Con merchandise, souvenirs, etc.'+
    '</li>'+
    '<li id="faq-tab-three-par-sub-three">'+
    'Clothes good for 5 days. Make sure to bring extra shirts or towels as it is extra warm in Penang, Malaysia around this time.'+
    '</li>'+
    '<li id="faq-tab-three-par-sub-four">'+
    'Take a camera with you to make your precious V-Con memories last, and have something you can show to your family and future prospects when you go back home.'+
    '</li>'+
    '<li id="faq-tab-three-par-sub-five">'+
    'As you want to savour every valuable session on stage, make sure to bring your own pen and notebook for some serious note-taking!'+
    '</li>'+
    '</ol>');
    $('#faq-tab-four').html('Will there be tickets for sale on the day of the event itself?');
    $('#faq-tab-four-par').html('Yes. Only transactions made thru cash and credit card will be accommodated.');
    $('#faq-tab-five').html('Will there be single-day event tickets available?');
    $('#faq-tab-five-par').html('No. The 5-day program we prepared for you is something that should be attended from Day 1 to 5 for a complete life-changing experience. It is a comprehensive, holistic event with an action-packed line-up of activities that are highly essential for your business.');

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
    $('#faq-tab-five').html('هل سيكون هناك تذاكر متاحة لفعالية يوم واحد؟');
}

function toTurkish(){

}

function toFrench(){

}

function toRussian(){

}

function toIndonesian(){

}
