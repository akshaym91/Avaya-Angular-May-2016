bugTrackerApp.factory('BugTracker', function BugTracker(appDefaults) {
    // var closedBugs = 0;
    var staticIndexGenerator = 0;
    return {
        bugs: [],
        closedBugs: 0,
        addBug: function(newBug) {
            newBug.title = newBug.title || appDefaults.title;
            newBug.description = newBug.description || appDefaults.description;
            newBug.id = staticIndexGenerator++;
            this.bugs.push(newBug);
            window.localStorage.setItem('bugList', angular.toJson(this.bugs));
        },
        deleteBug: function(bug) {
            var removalIndex = this.bugs.indexOf(bug);
            if (removalIndex > -1) {
                this.bugs.splice(removalIndex, 1);
                window.localStorage.setItem('bugList', angular.toJson(this.bugs));
            }
            if (bug.closed){
              this.closedBugs--;
            }
        },
        closeBug: function(bug) {
            var closureIndex = this.bugs.indexOf(bug);
            if (closureIndex > -1) {
                this.bugs[closureIndex].closed = true;
                window.localStorage.setItem('bugList', angular.toJson(this.bugs));
                this.closedBugs++;
            }
        }
    }
});
