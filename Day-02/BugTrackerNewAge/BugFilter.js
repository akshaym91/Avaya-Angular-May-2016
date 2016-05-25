bugTrackerApp.filter('trimText', function() {
    return function(text) {
        return text.length < 30 ? text : text.substr(0, 45) + '...';
    }
});
