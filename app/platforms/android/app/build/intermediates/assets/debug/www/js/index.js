

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
    var title = $('#header-title');

    $('.carousel').carousel('pause');

    $('.carousel-inner').on('swipeleft', function(e) {
        $(this).parent().carousel('next');
    });
    $('.carousel-inner').on('swiperight', function(e) {
        $(this).parent().carousel('prev');
    });

    $('#pageCarousel').on('slid.bs.carousel', function (e) {
        var page = $('.item.active').attr('id');
        title.html(jsUcfirst(page));
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

    $('form').submit(function(event){
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
