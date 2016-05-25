var utils = angular.module('utils', []);


utils.filter('trimText', function() {
    return function(text) {
        return text.length < 30 ? text : text.substr(0, 45) + '...';
    }
});
utils.filter('howLongBack', function(momentApi) {
    return function(text) {
        return momentApi(text).fromNow();
    }
});

bugTrackerApp.filter("toClosedCount", function() {
    return function(bugs) {
        return bugs.reduce(function(result, bug) {
            return bug.closed ? ++result : result;
        }, 0);
    };
});
