$(function() {
    ////////// Main House Page
    // Welcome messege
    $('.welcome-messege').delay(1000).animate({width:'+=2389px'}, 2500);
    $('body').click(function(){$('.welcome-messege').fadeOut();});
        
        
        // Событие с собакой
        //$('#dog2, .dog-hover').hide();
        $('.dog').mouseover(function(){
            $('#dog1').rotate(180);  
            $('.dog-hover').fadeIn();
            $("#dog_sounds")[0].play();
        });
        $('.dog').mouseout(function(){
            $('#dog1').rotate(0); 
            $('.dog-hover').fadeOut();
        });
        // Событие с дверью
        $('.knock-hover').hide();
        $('.knock').mouseover(function(){
            $('.knock-hover').fadeIn();
        });
        $('.knock').mouseout(function(){
            $('.knock-hover').fadeOut();
        });
        $('.knock, #knock_img').click(function(){
            $("#knock_sounds")[0].play();
            //if ($.browser.mozilla) {$("#knock_sounds")[1].play();}
            $('.knock-hover').hide();
            $('.dog, .mailbox, .bike, .knock, .logo').fadeOut(3700);
            $('.pics').delay(4000).queue(function() {
                $("#screen_changes_sounds")[0].play();
                $('.pics').cycle(1);
            });
        });
        // Событие с почтовым ящиком
        $('.mailbox-hover').hide();
        $('.mailbox').mouseover(function(){
            $('.mailbox-hover').fadeIn();
            $('#mailbox_wiggle').wiggle('start', {degrees: ['1','35','1','0','-1','-35','-1','0']});
        });
        $('.mailbox').mouseout(function(){
            $('.mailbox-hover').fadeOut();
            $('#mailbox_wiggle').wiggle('stop');
        });
        $("#close").click(function () {
            $("#popup-window").hide();
        });
        $('.mailbox').click(function(){
            $("#mailbox_sounds")[0].play();
            //if ($.browser.mozilla) {$("#mailbox_sounds")[1].play();}
            $("#popup-window").toggle("slow");
        });
        // Событие с велосипедом
        $('.bike-hover').hide();
        $('.bike').mouseover(function(){
            $('.bike-hover').fadeIn();
            $('#bike_wiggle').wiggle('start', {degrees: ['1','35','1','0','-1','-35','-1','0']});
        });
        $('.bike').mouseout(function(){
            $('.bike-hover').fadeOut();
            $('#bike_wiggle').wiggle('stop');
        });
        $('.bike').click(function(){
            $("#bike_sounds")[0].play();
            //if ($.browser.mozilla) {$("#bike_sounds")[1].play();}
        });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
        // Меню
        $('.m-menu').hide();
        $('.menu-m').toggle(
        function(){
            $('.m-menu').fadeIn();
        },
        function(){
            $('.m-menu').fadeOut();
        }
        );
        $('#link1, #link6, #link11, #link16').click(function(){
            $('.lamp-hover, .telephone-hover, .magnet-hover, .cookies-hover, .dog2-hover, .lamp, .telephone, .magnet, .cookies, .dog2').hide();
            $('.poster-hover, .dog3-hover, .laptop-hover, .journals-hover, .telephone2-hover, .poster, .dog3, .laptop, .journals, .telephone2').hide();
            $('.telephone4-hover, .netflix-hover, .games-hover, .dog4-hover, .popcorn-hover, .telephone4, .netflix, .games, .dog4, .popcorn').hide();
            
            $('.m-menu').hide();
            $("#screen_changes_sounds")[0].play();
            $('.pics').cycle(0);
            $('.dog, .mailbox, .bike, .knock, .logo').fadeIn(3700);
        });
        $('#link2, #link7, #link12, #link17').click(function(){
            $('.lamp-hover, .telephone-hover, .magnet-hover, .cookies-hover, .dog2-hover, .lamp, .telephone, .magnet, .cookies, .dog2').hide();
            $('.poster-hover, .dog3-hover, .laptop-hover, .journals-hover, .telephone2-hover, .poster, .dog3, .laptop, .journals, .telephone2').hide();
            $('.telephone4-hover, .netflix-hover, .games-hover, .dog4-hover, .popcorn-hover, .telephone4, .netflix, .games, .dog4, .popcorn').hide();
            
            $('.m-menu').hide();
            $("#screen_changes_sounds")[0].play();
            $('.pics').cycle(1);
        });
        $('#link3, #link8, #link13, #link18').click(function(){
            $('.lamp-hover, .telephone-hover, .magnet-hover, .cookies-hover, .dog2-hover, .lamp, .telephone, .magnet, .cookies, .dog2').hide();
            $('.poster-hover, .dog3-hover, .laptop-hover, .journals-hover, .telephone2-hover, .poster, .dog3, .laptop, .journals, .telephone2').hide();
            $('.telephone4-hover, .netflix-hover, .games-hover, .dog4-hover, .popcorn-hover, .telephone4, .netflix, .games, .dog4, .popcorn').hide();
            
            $('.m-menu').hide();
            $("#screen_changes_sounds")[0].play();
            $('.pics').cycle(2);
        });
        $('#link4, #link9, #link14, #link19').click(function(){
            $('.lamp-hover, .telephone-hover, .magnet-hover, .cookies-hover, .dog2-hover, .lamp, .telephone, .magnet, .cookies, .dog2').hide();
            $('.poster-hover, .dog3-hover, .laptop-hover, .journals-hover, .telephone2-hover, .poster, .dog3, .laptop, .journals, .telephone2').hide();
            $('.telephone4-hover, .netflix-hover, .games-hover, .dog4-hover, .popcorn-hover, .telephone4, .netflix, .games, .dog4, .popcorn').hide();
            
            $('.m-menu').hide();
            $("#screen_changes_sounds")[0].play();
            $('.pics').cycle(4);
        });
        $('#link5, #link10, #link15, #link20').click(function(){
            $('.lamp-hover, .telephone-hover, .magnet-hover, .cookies-hover, .dog2-hover, .lamp, .telephone, .magnet, .cookies, .dog2').hide();
            $('.poster-hover, .dog3-hover, .laptop-hover, .journals-hover, .telephone2-hover, .poster, .dog3, .laptop, .journals, .telephone2').hide();
            $('.telephone4-hover, .netflix-hover, .games-hover, .dog4-hover, .popcorn-hover, .telephone4, .netflix, .games, .dog4, .popcorn').hide();
            
            $('.m-menu').hide();
            $("#screen_changes_sounds")[0].play();
            $('.pics').cycle(3);
        });
        // Логотип
        $('.logo').mouseover(function(){
            $('#logo_wiggle, #logo_wiggle2, #logo_wiggle3, #logo_wiggle4, #logo_wiggle5').wiggle('start', {degrees: ['1','25','1','0','-1','-25','-1','0']});
        });
        $('.logo').mouseout(function(){
            $('#logo_wiggle, #logo_wiggle2, #logo_wiggle3, #logo_wiggle4, #logo_wiggle5').wiggle('stop');
        });
        ////////// Слайд - Переход между комнатами
        $('.tv-room-s-hover, .library-s-hover, .kitchen-s-hover').hide();
        
        $('.kitchen-s').hover(
        function(){
            $('.kitchen-s-hover').fadeIn();
        },
        function(){
            $('.kitchen-s-hover').fadeOut();
        }
        );
        $('.kitchen-s').click(function(){
            $('.kitchen-s-hover').hide();
            $("#screen_changes_sounds")[0].play();
            $('.pics').cycle(2);
            $('.lamp, .telephone, .magnet, .cookies, .dog2').delay(2000).fadeIn(2000);
        });
        
        $('.library-s').hover(
        function(){
            $('.library-s-hover').fadeIn();
        },
        function(){
            $('.library-s-hover').fadeOut();
        }
        );
        $('.library-s').click(function(){
            $('.library-s-hover').hide();
            $("#screen_changes_sounds")[0].play();
            $('.pics').cycle(3);
            $('.poster, .dog3, .laptop, .journals, .telephone2').delay(2000).fadeIn(2000);
        });
        
        $('.tv-room-s').hover(
        function(){
            $('.tv-room-s-hover').fadeIn();
        },
        function(){
            $('.tv-room-s-hover').fadeOut();
        }
        );
        $('.tv-room-s').click(function(){
            $('.tv-room-s-hover').hide();
            $("#screen_changes_sounds")[0].play();
            $('.pics').cycle(4);
            $('.popcorn, .telephone4, .netflix, .games, .dog4').delay(2000).fadeIn(2000);
        });
        
        ////////// Слайд - Кухня
        $('.darknes').hide();
        $('.lamp-hover, .telephone-hover, .magnet-hover, .cookies-hover, .dog2-hover, .lamp, .telephone, .magnet, .cookies, .dog2').hide();
        // Слайды
        $("#close_magnit_info").click(function () {
            $("#magnit_info").hide();
        });
        $("#close_cook_info").click(function () {
            $("#cook_info").hide();
        });
        $("#close_telephone_info1").click(function () {
            $("#telephone_info1").hide();
        });
        // Лампа
        $('.lamp').mouseover(function(){
            $('.lamp-hover').fadeIn();
            $('#lamp_wiggle').wiggle('start', {degrees: ['1','35','1','0','-1','-35','-1','0']});
        });
        $('.lamp').mouseout(function(){
            $('.lamp-hover').fadeOut();
            $('#lamp_wiggle').wiggle('stop');
        });
        $('.lamp').toggle(
            function(){
                $("#light_sounds")[0].play();
                $('.darknes').show();
            },
            function(){
                $("#light_sounds")[0].play();
                $('.darknes').hide();
            }
        );
        // Телефон
        $('.telephone').mouseover(function(){
            $('.telephone-hover').fadeIn();
            $('#telephone_wiggle').wiggle('start', {degrees: ['1','35','1','0','-1','-35','-1','0']});
        });
        $('.telephone').mouseout(function(){
            $('.telephone-hover').fadeOut();
            $('#telephone_wiggle').wiggle('stop');
        });
        $('.telephone').click(function(){
            $("#ring_sounds")[0].play();
            $("#telephone_info1").toggle("slow");
        });
        // Магнит
        $('.magnet').mouseover(function(){
            $('.magnet-hover').fadeIn();
            $('#magnet_wiggle').wiggle('start', {degrees: ['1','35','1','0','-1','-35','-1','0']});
        });
        $('.magnet').mouseout(function(){
            $('.magnet-hover').fadeOut();
            $('#magnet_wiggle').wiggle('stop');
        });
        $('.magnet').click(function(){
            $("#magnit_info").toggle("slow");
        });
        // Печенье
        $('.cookies').mouseover(function(){
            $('.cookies-hover').fadeIn();
            $('#cookies_wiggle').wiggle('start', {degrees: ['1','35','1','0','-1','-35','-1','0']});
        });
        $('.cookies').mouseout(function(){
            $('.cookies-hover').fadeOut();
            $('#cookies_wiggle').wiggle('stop');
        });
        $('.cookies').click(function(){
            $("#cook_info").toggle("slow");
        });
        // Собака
        $('.dog2').mouseover(function(){
            $('.dog2-hover').fadeIn();
            $('#dog2_wiggle').wiggle('start', {degrees: ['1','35','1','0','-1','-35','-1','0']});
        });
        $('.dog2').mouseout(function(){
            $('.dog2-hover').fadeOut();
            $('#dog2_wiggle').wiggle('stop');
        });
        $('.dog2').click(function(){
            $("#dog_kitchen_sounds")[0].play();
        });
        ////////// Слайд - Библиотека
        $('.poster-hover, .dog3-hover, .laptop-hover, .journals-hover, .telephone2-hover, .poster, .dog3, .laptop, .journals, .telephone2').hide();
        // Слайды
        $("#close_poster_info").click(function () {
            $("#poster_info").hide();
        });
        $("#close_nout_info").click(function () {
            $("#nout_info").hide();
        });
        $("#close_journal_info").click(function () {
            $("#journal_info").hide();
        });
        $("#close_telephone_info2").click(function () {
            $("#telephone_info2").hide();
        });
        // Постер
        $('.poster').mouseover(function(){
            $('.poster-hover').fadeIn();
            $('#poster_wiggle').wiggle('start', {degrees: ['1','35','1','0','-1','-35','-1','0']});
        });
        $('.poster').mouseout(function(){
            $('.poster-hover').fadeOut();
            $('#poster_wiggle').wiggle('stop');
        });
        $('.poster').click(function(){
            $("#poster_info").toggle("slow");
        });
        // Собака
        $('.dog3').mouseover(function(){
            $('.dog3-hover').fadeIn();
            $('#dog3_wiggle').wiggle('start', {degrees: ['1','35','1','0','-1','-35','-1','0']});
        });
        $('.dog3').mouseout(function(){
            $('.dog3-hover').fadeOut();
            $('#dog3_wiggle').wiggle('stop');
        });
        $('.dog3').click(function(){
            $("#dog3_sounds")[0].play();
        });
        // Ноутбук
        $('.laptop').mouseover(function(){
            $('.laptop-hover').fadeIn();
            $('#laptop_wiggle').wiggle('start', {degrees: ['1','35','1','0','-1','-35','-1','0']});
        });
        $('.laptop').mouseout(function(){
            $('.laptop-hover').fadeOut();
            $('#laptop_wiggle').wiggle('stop');
        });
        $('.laptop').click(function(){
            $("#nout_info").toggle("slow");
        });
        // Журналы
        $('.journals').mouseover(function(){
            $('.journals-hover').fadeIn();
            $('#journals_wiggle').wiggle('start', {degrees: ['1','35','1','0','-1','-35','-1','0']});
        });
        $('.journals').mouseout(function(){
            $('.journals-hover').fadeOut();
            $('#journals_wiggle').wiggle('stop');
        });
        $('.journals').click(function(){
            $("#journals_sounds")[0].play();
            $("#journal_info").toggle("slow");
        });
        // Телефон
        $('.telephone2').mouseover(function(){
            $('.telephone2-hover').fadeIn();
            $('#telephone2_wiggle').wiggle('start', {degrees: ['1','35','1','0','-1','-35','-1','0']});
        });
        $('.telephone2').mouseout(function(){
            $('.telephone2-hover').fadeOut();
            $('#telephone2_wiggle').wiggle('stop');
        });
        $('.telephone2').click(function(){
            $("#ring_sounds")[0].play();
            $("#telephone_info2").toggle("slow");
        });
        ////////// Слайд - ТВ-комната
        $('.telephone4-hover, .netflix-hover, .games-hover, .dog4-hover, .popcorn-hover, .telephone4, .netflix, .games, .dog4, #popcorn_1, #popcorn_2, #popcorn_3, .popcorn').hide();
        // Слайды
        $("#close_game_info").click(function () {
            $("#game_info").hide();
        });
        $("#close_tv_info").click(function () {
            $("#tv_info").hide();
        });
        $("#close_telephone_info3").click(function () {
            $("#telephone_info3").hide();
        });
        // Телефон
        $('.telephone4').mouseover(function(){
            $('.telephone4-hover').fadeIn();
            $('#telephone4_wiggle').wiggle('start', {degrees: ['1','35','1','0','-1','-35','-1','0']});
        });
        $('.telephone4').mouseout(function(){
            $('.telephone4-hover').fadeOut();
            $('#telephone4_wiggle').wiggle('stop');
        });
        $('.telephone4').click(function(){
            $("#ring_sounds")[0].play();
            $("#telephone_info3").toggle("slow");
        });
        // Телевизор
        $('.netflix').mouseover(function(){
            $('.netflix-hover').fadeIn();
            $('#netflix_wiggle').wiggle('start', {degrees: ['1','35','1','0','-1','-35','-1','0']});
        });
        $('.netflix').mouseout(function(){
            $('.netflix-hover').fadeOut();
            $('#netflix_wiggle').wiggle('stop');
        });
        $('.netflix').click(function(){
            $("#tv_info").toggle("slow");
        });
        // Игры
        $('.games').mouseover(function(){
            $('.games-hover').fadeIn();
            $('#games_wiggle').wiggle('start', {degrees: ['1','35','1','0','-1','-35','-1','0']});
        });
        $('.games').mouseout(function(){
            $('.games-hover').fadeOut();
            $('#games_wiggle').wiggle('stop');
        });
        $('.games').click(function(){
            $("#game_info").toggle("slow");
        });
        // Игры
        $('.dog4').mouseover(function(){
            $('.dog4-hover').fadeIn();
            $('#dog4_wiggle').wiggle('start', {degrees: ['1','35','1','0','-1','-35','-1','0']});
        });
        $('.dog4').mouseout(function(){
            $('.dog4-hover').fadeOut();
            $('#dog4_wiggle').wiggle('stop');
        });
        $('.dog4').click(function(){
            $("#panikdog_sounds")[0].play();
        });
        // Попкорн
        //$('.popcorn').mouseover(function(){
        //    $('.popcorn-hover').fadeIn();
        //});
        $('.popcorn').toggle(
        function(){
            $("#popcorn_sounds")[0].play();
            $('#popcorn_1, #popcorn_2, #popcorn_3').show();
        },
        function(){
            $('#popcorn_1, #popcorn_2, #popcorn_3').hide();
        }
        );
        $('.popcorn').hover(
        function(){
            $('.popcorn-hover').show();
            $('#popc').wiggle('start', {degrees: ['1','35','1','0','-1','-35','-1','0']});
        },
        function(){
            $('.popcorn-hover').hide();
            $('#popc').wiggle('stop');
        }
        );
        ////////// Слайдер
        $(function() {
            $('.pics').cycle({ 
                fx:     'zoom', 
                speed:  2000,
                timeout: 0,
            });
        });
    });