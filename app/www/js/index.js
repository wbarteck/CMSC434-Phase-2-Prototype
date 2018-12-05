

var app = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        document.addEventListener('pause', this.onPause, false);
        document.addEventListener('resume', this.onResume, false);
        document.addEventListener('backbutton', this.onBackButton, false);
    },
    onDeviceReady: function() {
        //navigator.notification.alert('test', null, 'Test Alert', 'done');
    },
    onPause: function() {},
    onResume: function() {},
    onBackButton: function() {
        navigator.notification.alert('back', null, 'Test Back', 'done');
    }
}

app.initialize();

$(document).ready(function() {

    $('.carousel').carousel('pause');

    $('.carousel-inner').on('swipeleft', function(e) {
        $(this).parent().carousel('next');
    });
    $('.carousel-inner').on('swiperight', function(e) {
        $(this).parent().carousel('prev');
    });

    $('#pageCarousel').on('slid.bs.carousel', function (e) {
        var page = $('.item.active').attr('id');
        switch(page) {
            case "home":
                $(".tablink").removeClass('tab-active');
                $('#NavHome').addClass('tab-active');
                break;
            case "user-view":
                $(".tablink").removeClass('tab-active');
                $('#NavUsers').addClass('tab-active');
                break;
            case "calendar":
                $(".tablink").removeClass('tab-active');
                $('#NavCalendar').addClass('tab-active');
                break;
            case "slideshow":
                $(".tablink").removeClass('tab-active');
                $('#NavSlideshow').addClass('tab-active');
                break;
            case "FAQ":
                $(".tablink").removeClass('tab-active');
                $('#NavFAQ').addClass('tab-active');
                break;
        }
    });

    $('#EvanGolub').on("click", function() {
        $('.carousel').carousel(1);
    });
    $('#LarryHerman').on("click", function() {
        $('.carousel').carousel(2);
    });
    $('#AnwarMamat').on("click", function() {
        $('.carousel').carousel(3);
    });
    // add more pages for navbar
    $('#NavHome').on("click", function() {
        $(".tablink").removeClass('tab-active');
        $('#NavHome').addClass('tab-active');
        $('.carousel').carousel(0);
    });
    $('#NavUsers').on("click", function() {
        $(".tablink").removeClass('tab-active');
        $('#NavUsers').addClass('tab-active');
        $('.carousel').carousel(1);
    });
    $('#NavCalendar').on("click", function() {
        $(".tablink").removeClass('tab-active');
        $('#NavCalendar').addClass('tab-active');
        $('.carousel').carousel(4);
    });
    $('#NavSlideshow').on("click", function() {
        $(".tablink").removeClass('tab-active');
        $('#NavSlideshow').addClass('tab-active');
        $('.carousel').carousel(5);
    });
    $('#NavFAQ').on("click", function() {
        $(".tablink").removeClass('tab-active');
        $('#NavFAQ').addClass('tab-active');
        $('.carousel').carousel(6);
    });

    $('form').submit(function(event){
        if (!$(this).find('input[name="name"]').val() ) {
            navigator.notification.alert('Your name is empty', null, 'Error!', 'Back');
            return;
        }
        if (!$(this).find('input[name="email"]').val() ) {
            navigator.notification.alert('Your email is empty', null, 'Error!', 'Back');
            return;
        }
        if (!$(this).find('textarea').val() ) {
            navigator.notification.alert('Your message is empty', null, 'Error!', 'Back');
            return;
        }

        navigator.notification.alert('Your message has been sent to this office member', null, 'Message Sent!', 'Great');
        $('form').trigger('reset');
    });
    
});

var slideIndex = 0;
var slides = ["./img/sample1.jpg","./img/sample2.jpg","./img/sample3.jpg"];
setInterval(function() {
    slideIndex = (slideIndex + 1) % 2;
    $("#slideshow-img").attr("src", slides[slideIndex]);
}, 3000);

function jsUcfirst(string) { return string.charAt(0).toUpperCase() + string.slice(1);}
