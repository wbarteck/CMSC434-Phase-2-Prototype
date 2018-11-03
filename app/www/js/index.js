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
        navigator.notification.alert('test', null, 'Test Alert', 'done');
    },
    onPause: function() {},
    onResume: function() {},
    onBackButton: function() {
        navigator.notification.alert('back', null, 'Test Back', 'done');
    }
}



app.initialize();